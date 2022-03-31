const util = require('util');

//Given a sorted array, remove the duplicates in place such that each element appear only twice and return the new length.
let removeDuplicates = function (nums) {
    let i = 0;
    let j = 1;
    let k = 0;
    while (k < nums.length) {
        if (nums[i] === nums[j]) {
            j++
        }
        else {
            if (i + 1 < j - 1) {
                nums[i + 1] = nums[j - 1]
            }
            j++
            i++
        }
        k++;
    };
    console.log(i)
    console.log(j)
    console.log(nums)
}
//  !                            !  !
// console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))

// function for Partition List
const list = {
    value: 2,
    next: {
        value: 1,
        next: null
    }
}
function ListNode(value) {
    this.value = value;
    this.next = null
}
function partition(list, k) {
    let front = new ListNode(0)
    let back = new ListNode(0)
    let newList = back
    let returnList = front
    while (list) {
        if (list.value < k) {
            front.next = new ListNode(list.value)
            front = front.next
            list = list.next
        }
        else {
            back.next = new ListNode(list.value)
            back = back.next
            list = list.next
        }
    }
    console.log(back)
    front.next = newList.next
    console.log(util.inspect(returnList, false, null, true))
    return returnList.next
}
// partition(list, 2)


// function to reverse word in string
function reverseWords(str) {
    let words = str.trim().split(' ')
    words = words.filter(el => el)
    let temp, i = 0, j = words.length - 1;
    while (i < j) {
        temp = words[i]
        words[i] = words[j]
        words[j] = temp
        i++
        j--
    }
    console.log(words.join(" "))
}
reverseWords("a good   example")
