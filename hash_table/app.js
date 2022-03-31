const groupAnagrams = function (strs) {
    let group = {}
    if (!strs) return [strs]
    if (strs.length <= 1) return [strs]
    strs.forEach(el => {
        let temp = el.split("").sort().join("")
        !group[temp] ? group[temp] = [el] : group[temp].push(el)
    })
    return Object.values(group)
}
// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// console.log(groupAnagrams(["a"]))

const characterReplacement = (str, val) => {
    "use strict"
    let temp = {}, left = 0, max = 0
    for (let i = 0; i < str.length; i++) {
        !temp[str[i]] ? temp[str[i]] = 1 : temp[str[i]]++
        while (i - left + 1 - Math.max(...Object.values(temp)) > val) {
            console.log("IN WHILE", temp);
            temp[str[left]] -= 1
            left += 1
        }
        max = Math.max(max, i - left + 1)
        console.log({ i });
        console.log({ max });
        console.log({ temp });
    }
    // while ((right - left + 1)- <= val) {

    // }
    console.log({ max })
}
// characterReplacement("AABABBA", 1)

// [AABBAABBA],3
//  1      r
//  7+1-0-4<=3

const findAnagrams = (s, p) => {
    let obj = {}
    for (let i = 0; i < p.length; i++) {
        !obj[p[i]] ? obj[p[i]] = 1 : obj[p[i]]++
    }
    console.log(obj);
    let result = []
    let l = p.length
    for (let i = 0; i < s.length; i++) {
        let count = 0
        let temp = { ...obj }
        for (let j = 0; j < p.length; j++) {
            if (s[i + j] && (s[i + j] in temp) && temp[s[i + j]] > 0) {
                count++
                if (count === l) {
                    result.push(i)
                    break;
                }
                temp[s[i + j]]--
            }
            else {
                break;
            }
        }
    }
    return result
}
// console.log(findAnagrams("cbaebabacd", "abc"))
// console.log(findAnagrams("abab", "ab"))

const findAnagram = (s, p) => {
    let map1 = new Map()
    for (let i = 0; i < p.length; i++) {
        !map1.get(p[i]) ? map1.set(p[i], 1) : map1.set(p[i], map1.get(p[i]) + 1)
    }
    let result = []
    let l = p.length
    for (let i = 0; i < s.length; i++) {
        let count = 0
        let temp = new Map(map1)
        for (let j = 0; j < p.length; j++) {
            if (s[i + j] && temp.has(s[i + j]) && temp.get(s[i + j]) > 0) {
                count++
                if (count === l) {
                    result.push(i)
                    break;
                }
                temp.set(s[i + j], temp.get(s[i + j]) - 1)
            }
            else {
                break;
            }
        }
    }
    return result
}
console.log(findAnagram("cbaebabacd", "abc"))
