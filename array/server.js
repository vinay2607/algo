
// const { performance } = require('perf_hooks');
// // // function to check if sum of Array is zero
// // function checkSum(arr){
// // let sum =0
// // let left=0
// // let right=arr.length-1
// // while(left<right){
// //     sum=arr[left]+arr[right]
// //     if(sum<0){
// //         right--
// //     }
// //     else if(sum>0){
// //         left++
// //     }
// //     else{
// //         return {left,right}
// //     }

// // }
// // }
// // console.log(checkSum([-3,-2,-1,0,-1,2,3]))

// // function to find longest string without repeating characters
// // function longestString(str) {
// //     let max = 0
// //     let val = ""
// //     let temp = 0
// //     for (let i = 0; i < str.length; i++) {
// //         if ((!(val.includes(str[i])))) {
// //             val += str[i]
// //             temp++
// //         }
// //         else {
// //             if (temp > max) {
// //                 max = temp
// //                 // console.log(temp)
// //                 temp = 0
// //                 val = ""
// //                 i--
// //             }
// //         }
// //     }
// //     temp > max ? max = temp : 0
// //     return max
// // }
// // console.log(longestString("aab"))
// // console.log(longestString("abcabcbb"))
// // console.log(longestString("bbbbb"))
// // console.log(longestString("pwwkew"))
// // console.log(longestString("dvdf"))

// // function long(str) {
// //     let max = 0
// //     let val = ""
// //     let temp = 1
// //     for (let i = 0; i < str.length; i++) {
// //         console.log({ temp })
// //         for (let j = i + 1; j < str.length; j++) {
// //             console.log(i, j)
// //             if (str[i] != str[j]) {
// //                 console.log("hello")
// //                 temp++
// //             }
// //             else {
// //                 console.log({ temp, max })
// //                 temp > max ? max = temp : 1
// //                 temp = 1
// //                 break;
// //             }
// //         }
// //     }
// // }
// // // console.log(long("abcabcbb"))
// // function longest(str) {
// //     let t1 = performance.now();
// //     let max = 0;
// //     let val = {};
// //     let temp = 0;
// //     let j = 0
// //     for (let i = 0; i < str.length; i++) {
// //         j = i
// //         while (str[j]) {
// //             if (!(str[j] in val)) {
// //                 val[str[j]] = 1
// //                 temp++
// //             }
// //             else {
// //                 temp > max ? max = temp : 0
// //                 val = {}
// //                 temp = 0
// //                 break;
// //             }
// //             temp > max ? max = temp : 0
// //             j++
// //         }
// //         val = {}
// //         temp = 0
// //     }
// //     let t2 = performance.now();
// //     console.log(t2 - t1)
// //     return max
// // }
// // console.log(longest("aab"))
// // console.log(longest("abcabcbb"))
// // console.log(longest("bbbbb"))
// // console.log(longest("pwwkew"))
// // console.log(longest("dvdf"))
// // console.log(longest("jbpnbwwd"))

// // function permutation(str1, str2) {
// //     let obj = {}
// //     let s1Length = str1.length
// //     let s2Length = str2.length
// //     if (s1Length > s2Length) return false
// //     for (let i = str1.length - 1; i >= 0; i--) {
// //         (!(str1[i] in obj)) ? obj[str1[i]] = 1 : obj[str1[i]] = obj[str1[i]] + 1
// //     }
// //     let obj1 = { ...obj }
// //     for (let i = 0; i < str2.length; i++) {
// //         let j = i
// //         while (j < s2Length) {
// //             if (str2[j] in obj) {
// //                 if (obj[str2[j]] === 1) {
// //                     delete obj[str2[j]];
// //                 }
// //                 else {
// //                     obj[str2[j]] = obj[str2[j]] - 1
// //                 }
// //                 if ((Object.keys(obj)).length === 0) {
// //                     return true
// //                 }
// //             }
// //             else {
// //                 break;
// //             }
// //             j++;
// //         }
// //         obj = { ...obj1 }
// //     }
// //     return false
// // }
// // console.log(permutation("aaab", "eidabaooao"))


// // function for 3sum
// function threeSum(arr) {
//     const obj = []

// for (let i = 0; i < arr.length; i++) {
//     !obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]] = obj[arr[i]] + 1
// }
//     for (let i = 0; i < arr.length; i++) {
//         let firstValue = arr[i]
//         const array = twoSum(arr, -firstValue)
//         if (array.length) {
//             array.forEach(el => {
//                 el.push(firstValue)
//                 obj.push(el)
//             })
//         }
//         console.log(obj)
//     }
// }
// threeSum([-1, 0, 1, 2, -1, -4])
// function twoSum(arr, sum) {
//     const answer = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             console.log(arr[j])
//             if (arr[j] + arr[i] === sum && i !== j) {
//                 answer.push([arr[i], arr[j]])
//             }
//         }
//     }
//     // console.log(answer)
//     return answer
// }
// twoSum([-1, 0, 1, 2, -1, -4], -2)

// function combinationSum(arr, sum) {
//     const uniqueArray = [...new Set(arr)]
//     const answer = []
//     for (let i = 0; i < uniqueArray.length; i++) {
//         // console.log(uniqueArray, answer.length)
//         if (sum % uniqueArray[i] === 0) {
//             console.log(answer.fill(2, 0))
//         }
//     }
//     // console.log(answer)
// }
// combinationSum([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4], 12)

/**
 * Maximum Product of Word Lengths
 * Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16
Explanation: The two words can be "abcw", "xtfn".
 */


// function maxProduct(arr) {
//     let product = 0
//     let temp = 0
//     for (let k = 0; k < arr.length; k++) {
//         for (let j = k + 1; j < arr.length; j++) {
//             temp = sameCharacter(arr[k], arr[j])
//             temp > product ? product = temp : 0
//         }
//         temp = 0
//     }
//     return product
// }
// console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]))
// console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]))
// console.log(maxProduct(["a", "aa", "aaa", "aaaa"]))
// // function to find if two string contain same character
// function sameCharacter(str1, str2) {
//     for (let i = 0; i < str1.length; i++) {
//         if (str2.includes(str1[i])) return 0
//     }
//     return str1.length * str2.length
// }
// // console.log(sameCharacter("qwb", "reu"))

/**
 * Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
 */
// function parseDictionary(dictionary, sentence) {
//     console.log("ggoo")
//     let arr = sentence.split(" ")
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < dictionary.length; j++) {
//             if (arr[i].includes(dictionary[j])) {
//                 arr[i] = dictionary[j]
//                 break
//             }
//         }
//     }
//     const result = arr.join(" ")
//     console.log(result)
//     return result


// }
// parseDictionary(["cat", "bat", "rat"], "the cattle was rattled by the battery")
// parseDictionary(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs")


// const result = []
// const helper = (arr, temp) => {
//     if (arr.length === 0) {
//         result.push(temp)
//     }
//     for (let i = 0; i < arr.length; i++) {
//         const newArr = [...arr]
//         const newTemp = [...temp]
//         newTemp.push(arr[i])
//         newArr.splice(i, 1)
//         helper(newArr, newTemp)
//     }
// }
// helper(arr, [])
// console.log(result)
// return result





// function to rotate an array by a given number of steps
function rotate(arr, n) {
    const arr1 = arr.slice(0, n)
    const arr2 = arr.slice(n)
    const result = arr2.concat(arr1)
    // console.log(result)
    return result
}
// rotate([1, 2, 3, 4, 5, 6, 7], 7)
/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 * Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
[ [ 1, 2, 3 ], [ 2, 3, 1 ], [ 3, 1, 2 ] ]
 */
function permutation(arry) {
    const result = []
    const helper = (arr, temp) => {
        console.log({ arr, temp })
        if (arr.length === 0) {
            console.log("pushing")
            result.push(temp)
        }
        for (let i = 0; i < arr.length; i++) {
            const newArr = [...arr]
            const newTemp = [...temp]
            console.log({ newArr, newTemp })
            newTemp.push(arr[i])
            newArr.splice(i, 1)
            helper(newArr, newTemp)
        }
    }
    helper(arry, [])
    console.log(result)
    return result
}
// permutation([1, 2, 3])

// function of 3sum all the triplets whose sum is zero
// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
function threeSum(arr) {
    const result = []
    const sortArray = arr.sort((a, b) => a - b)
    for (let i = 0; i < sortArray.length - 2; i++) {
        let left = i + 1;
        let right = sortArray.length - 1;
        if (sortArray[i] > 0) break;
        if (sortArray[i] === sortArray[i - 1]) continue;
        while (left < right) {
            const sum = arr[left] + arr[i] + arr[right];
            if (sum < 0) {
                left++
            }
            else if (sum > 0) {
                right--
            }
            else {
                result.push([arr[i], arr[left], arr[right]])
                while (left < right && sortArray[left] === sortArray[left + 1]) {
                    console.log("i")
                    left++;
                }
                while (left < right && sortArray[right] === sortArray[right - 1]) {
                    console.log("j")
                    right--;
                }
                left++;
                right--;
            }
        }
    }
    console.log(result)
    return result
}
// threeSum([-1, 0, 1, 2, -1, -4])

// function of 4 sum all quadruplets whose sum is zero
function fourSum(nums, target) {
    const result = []
    const shortArray = arr.sort((a, b) => a - b)
    for (let i = 0; i < shortArray.length - 3; i++) {
        if (i > 0 && shortArray[i] === shortArray[i - 1]) continue;
        for (let j = i + 1; j < shortArray.length - 2; j++) {
            if (j > i + 1 && shortArray[j] === shortArray[j - 1]) continue;
            let left = j + 1, right = shortArray.length - 1;
            while (left < right) {
                let sum = shortArray[i] + shortArray[j] + shortArray[left] + shortArray[right]
                if (sum > target) {
                    right--;
                }
                else if (sum < target) {
                    left++
                }
                else {
                    result.push([shortArray[i], shortArray[j], shortArray[left], shortArray[right]])
                    while (left < right && shortArray[left] === shortArray[left + 1]) {
                        left++
                    }
                    while (left < right && shortArray[right] === shortArray[right - 1]) {
                        right--
                    }
                    left++;
                    right--;
                }
            }
        }
    }
    console.log(result)
    return result;

}
// fourSum([3, 4, 4, -9, -7, 2, 7, -2, -7, -7, -1, 0, -9, 0, 0, 2, 0],
//     -18
// )

// [4,5,6,7,0,1,2]
//[7,0,1,2,4,5,6]
function search(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let mid = ~~((left + right) / 2)
        if (arr[mid] > arr[right]) {
            left = mid + 1
        }
        else {
            right = mid
        }
    }
    let start = left
    if (arr[start] <= target && target <= arr[arr.length - 1]) {
        right = arr.length - 1
    }
    else {
        left = 0
        right = start - 1
    }
    while (left <= right) {
        mid = ~~((left + right) / 2)
        if (arr[mid] < target) {
            left = mid + 1
        }
        else if (arr[mid] > target) {
            right = mid - 1
        }
        else {
            return mid
        }
    }
    return -1
}
console.log(search([4, 5, 6, 7, 0, 1, 2], 6))

