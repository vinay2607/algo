const utils = require('util');
const list1 = {
    value: 4,
    next: {
        value: 2,
        next: {
            value: 1,
            next: {
                value: 3,
                next: null
            }
        }
    }
}

const list = {
    value: 1,
    next: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: {
                        value: 3,
                        next: {
                            value: 5,
                            next: {
                                value: 6,
                                next: {
                                    value: 6,
                                    next: {
                                        value: 7,
                                        next: null
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// function to merge Two sorted linked lists

/*
  Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

  Example:
  Input: 1->2->4, 1->3->4
  Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// mergeTwoLists(list, list12);

function ListNode(val) {
    this.value = val;
    this.next = null
}

function mergeShortList(list1, list2) {
    let l1 = list1, l2 = list2
    if (!l1) return l2
    if (!l2) return l1
    let newList = new ListNode(-1)
    let current = newList
    while (l1 && l2) {
        if (l1.value > l2.value) {
            newList.next = new ListNode(l2.value)
            l2 = l2.next
            newList = newList.next
        }
        else {
            newList.next = new ListNode(l1.value)
            l1 = l1.next
            newList = newList.next
        }
    }
    if (l1) newList.next = l1
    if (l2) newList.next = l2
    console.log(current)
    return current.next
}
// console.log(utils.inspect(mergeShortList(list, list12), false, null, true));

// function to remove duplicate entries linked list
function removeDuplicates(list) {
    let obj = {}
    let newList = new ListNode(-1)
    let current = newList
    function temp(list) {
        if (!list) {
            return current.next
        }
        if (Object.keys(obj).includes(list.value.toString())) {
            console.log(1)
            list = list.next
        }
        else {
            obj = {}
            obj[list.value] = 1
            newList.next = new ListNode(list.value)
            newList = newList.next
            list = list.next
        }
        return temp(list)
    }
    return temp(list)
    // console.log(obj)
    // return current.next
}
// console.log(utils.inspect(removeDuplicates(list), false, null, true));

// function to remove value from linked list
function removeValue(list, value) {
    let newList = new ListNode(-1)
    let current = newList
    while (list) {
        if (list.value !== value) {
            newList.next = new ListNode(list.value)
            newList = newList.next
            list = list.next
        }
        else {
            list = list.next
        }
    }
    return current.next
}
// console.log(removeDuplicates(list))
// console.log(utils.inspect(removeValue(list, 1), false, null, true));


function removeValue(list, value) {
    let current = list
    while (list && list.next) {
        if (list.next.value !== value) {
            list = list.next
        }
        else {
            list.next = list.next.next
        }
    }
    return current
}
// console.log(utils.inspect(removeValue(list, 7), false, null, true));

// function to reverse the list
function reverse(list) {
    const stack = []
    while (list) {
        stack.push(list.value)
        list = list.next
    }
    let newList = new ListNode(-1)
    let current = newList
    while (stack.length) {
        newList.next = new ListNode(stack.pop())
        newList = newList.next
    }
    return current.next
}
// console.log(utils.inspect(reverse(list), false, null, true));

// const list = {
//     value: 1,
//     next: {
//         value: 12,
//         next: {
//             value: 21,
//             next: {
//                 value: 33,
//                 next: {
//                     value: 47,
//                     next: null
//                 }
//             }
//         }
//     }
// }

// function reverseList(list) {
//     let next = null
//     let pev = null
//     let node
//     let newList = list
//     pev = list.next
//     list.next = next
//     while (pev) {
//         pev = pev.next
//         list.next = next
//     }
//     return pev
// }
// console.log(utils.inspect(reverseList(list), false, null, true));

// function to rotate the list
function rotate(list, k) {
    if (Object.keys(list).length === 0) return []
    if (!k) return list
    let newList = new ListNode(-1)
    let current = newList
    let lol = { ...list }
    let oldList = list
    let count = 1
    let length = 0
    while (lol) {
        lol = lol.next
        length++
    }
    if (k > length) k = k % length
    while (count <= (length - k)) {
        // console.log(k, count)
        if ((length - k) === count) {
            // console.log("yii")
            newList.next = list.next
            list.next = null
        }
        list = list.next
        count++;
    }
    while (newList) {
        if (!newList.next) {
            newList.next = oldList
            break;
        }
        newList = newList.next

    }
    // console.log(utils.inspect({ oldList }, false, null, true));
    // console.log(utils.inspect({ newList }, false, null, true));
    console.log(utils.inspect(current.next, false, null, true))
    return current.next
}
// rotate([], 4)

// function to add the two sum in linked lists
// function addTwoLists(list1, list2) {
//     let valOne = ""
//     let valTwo = ""
//     let newSum
//     let newList = new ListNode(-1)
//     let current = newList
//     while (list1) {
//         valOne += (list1.value).toString()
//         list1 = list1.next
//     }
//     while (list2) {
//         valTwo += (list2.value).toString()
//         list2 = list2.next
//     }
//     valOne = [...valOne].reverse().join('')
//     valTwo = [...valTwo].reverse().join('')
//     console.log({ valOne })
//     console.log({ valTwo })
//     newSum = (parseInt(valOne) + parseInt(valTwo))
//     console.log({ 1: newSum })
//     newSum = [...newSum].reverse().join('')
//     console.log({ newSum })
//     const arr = [...newSum].map(el => parseInt(el))
//     let i = 0
//     for (let i = 0; i < arr.length; i++) {
//         newList.next = new ListNode(arr[i])
//         newList = newList.next
//     }
//     console.log(utils.inspect(current.next, false, null, true))
//     return current.next
// }
// // [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
// // [5, 6, 4]
// addTwoLists(list, list1)


// function addTwoLists(l1, l2) {
//     let newList = new ListNode(-1)
//     let carry = 0
//     let returnList = newList
//     while (l1 || l2) {
//         let sum = l1 ? l1.value : 0 + l2 ? l2.value : 0 + carry;
//         carry = (sum >= 10) ? ~~(sum / 10) : 0
//         newList.next = new ListNode(sum >= 10 ? sum % 10 : sum)
//         l1 ? l1 = l1.next : null
//         l2 ? l2 = l2.next : null
//         newList = newList.next
//     }
//     // console.log(utils.inspect(returnList.next, false, null, true))
//     return returnList.next;
// }
// addTwoLists(list, list1)

// function to swapping node in linked list
function swap(list, k) {
    if (!list) return list
    let arr = [0]
    while (list) {
        arr.push(list.value);
        list = list.next
    }
    let size = arr.length
    let temp = arr[size - k]
    arr[size - k] = arr[k]
    arr[k] = temp
    arr.reverse(ListNode)
    let newList = new ListNode(arr.pop())
    let newResult = newList
    while (arr.length) {
        newList.next = new ListNode(arr.pop())
        newList = newList.next
    }
    console.log(utils.inspect(newResult.next, false, null, true))
    return newResult.next
}

//function to old and even in Linked List

function oldEven(list) {
    if (!list) return list
    let arr1 = []
    const arr2 = []
    let i = 0
    let newList = new ListNode(-1)
    let newResult = newList
    while (list) {
        i % 2 ? arr2.push(list.value) : arr1.push(list.value)
        list = list.next
        i++
    }
    arr1 = arr1.concat(arr2).reverse()
    while (arr1.length) {
        newList.next = new ListNode(arr1.pop())
        newList = newList.next
    }
    console.log(utils.inspect(newResult.next, false, null, true))
    return newResult.next
}
// oldEven(list)


// function to reorder list elements

// function reorderList(list) {
//     if (!list) return list
//     let stack = [];
//     let copyList = {
//         ...list
//     }
//     // let newList = new ListNode(0)
//     let returnList = list
//     let j = 0
//     while (copyList) {
//         stack.push(copyList.value)
//         copyList = copyList.next
//         j++
//     }
//     let i = 1
//     while (i < j) {

//         if (i % 2 === 0) {
//             console.log(i)
//             let temp = list.next
//             list.next = new ListNode(stack.pop())
//             list = list.next
//             list.next = temp
//             list = list.next
//             i++
//         }
//         else {
//             list = list.next
//         }
//         i++
//     }

//     console.log(utils.inspect(returnList, false, null, true))
//     return returnList
// }
// //  [1,5,2,4,3]
// // [1,2,3,4]
// // [1,4,2,3]
// reorderList(list)

function reorderList(list) {
    let copyList = list
    let stack = []
    let newList = list
    while (copyList) {
        stack.push(copyList.value)
        copyList = copyList.next
    }
    i = 1
    while (newList) {
        if (i % 2 === 0) {
            newList.value = stack.pop()
            newList = newList.next
        }
        else {
            newList.value = stack.shift()
            newList = newList.next
        }
        i++
    }
    console.log(utils.inspect(list, false, null, true));
    // console.log(utils.inspect(copyList, false, null, true));
}
// reorderList(list)

// function to find mid for the  linked list 

function findMid(list) {
    let slow = list
    let fast = list.next
    while (fast) {
        slow = slow.next
        fast = fast.next?.next
    }
    console.log(utils.inspect(slow, false, null, true));
    return slow
}
//[1,2,3,4,5,6]
// findMid(list)

// function to merge sort list
function sort(list) {
    if (!list || !list.next) return list
    let slow = list
    let fast = list
    let temp = list
    while (fast) {
        temp = slow
        slow = slow.next
        fast = fast.next?.next
    }
    console.log({ temp });
    temp.next = null
    // console.log(utils.inspect(list, false, null, true));
    // console.log(utils.inspect(slow, false, null, true));
    let one = sort(list);
    let two = sort(slow);
    return mergeTwoLists(one, two)
}
// console.log(utils.inspect(sort(list1), false, null, true));
// sort(list)
function mergeTwoLists(a, b) {
    console.log("A", utils.inspect(a, false, null, true));
    console.log("B", utils.inspect(b, false, null, true));
    let temp = new ListNode(0)
    let returnList = temp
    while (a && b) {
        if (a.value > b.value || a.value === b.value) {
            returnList.next = new ListNode(b.value)
            b = b.next
        }
        else {
            returnList.next = new ListNode(a.value)
            a = a.next
        }
        returnList = returnList.next
    }
    if (a) returnList.next = a
    if (b) returnList.next = b
    console.log("wow");
    console.log("hi", utils.inspect(temp.next, false, null, true));
    return temp.next
}
// mergeTwoLists(list, list1)


// function to remove  duplicates from sorted list
function removeDuplicates(list) {
    let fast = list.next
    let slow = list
    let temp = list
    let newList = new ListNode(0)
    let k = newList
    while (fast) {
        if (slow.value === fast.value) {
            while (slow.value === fast?.value) {
                fast = fast?.next
            }
            slow = { ...fast }
            fast = fast?.next
        }
        else {
            newList.next = new ListNode(slow?.value)
            newList = newList.next
            fast = fast.next
            slow = slow?.next
        }
    }
    if (slow.value && (slow.value !== newList.value)) {
        newList.next = new ListNode(slow.value)
    }
    // console.log(utils.inspect(slow.value, false, null, true));
    // console.log(utils.inspect(fast.value, false, null, true));
    console.log(utils.inspect(k.next, false, null, true));
}
removeDuplicates(list)