const util = require('util')
function node(value) {
    this.value = value,
        this.left = null,
        this.right = null
}

//                 10
//           5            15
//       2       7    12      20
//   1     3  6   8 9   13  17  22

// class bst {
//     constructor() {
//         this.root = null
//     }
//     insert(value) {
//         const newNode = new node(value)
//         if (!this.root) {
//             this.root = newNode
//         }
//         else {
//             let iterate = this.root
//             while (iterate) {
//                 if (iterate.value > value) {
//                     if (iterate.left) {
//                         iterate = iterate.left
//                     }
//                     else {
//                         iterate.left = newNode
//                         break;
//                     }
//                 }
//                 else if (iterate.value < value) {
//                     if (iterate.right) {
//                         iterate = iterate.right
//                     }
//                     else {
//                         iterate.right = newNode
//                         break;
//                     }
//                 }
//             }
//         }
//         return this
//     }
// }
// let a = new bst()
// a.insert(10)
// a.insert(5)
// a.insert(15)
// a.insert(2)
// a.insert(7)
// a.insert(12)
// a.insert(20)
// a.insert(1)
// a.insert(3)
// a.insert(6)
// a.insert(8)
// a.insert(9)
// a.insert(13)
// a.insert(17)
// a.insert(22)

// let tree = {
//     root: {
//         value: 10,
//         left: {
//             value: 5,
//             left: {
//                 value: 2,
//                 left: { value: 1, left: null, right: null },
//                 right: { value: 3, left: null, right: null }
//             },
//             right: {
//                 value: 7,
//                 left: { value: 6, left: null, right: null },
//                 right: {
//                     value: 8,
//                     left: null,
//                     right: { value: 9, left: null, right: null }
//                 }
//             }
//         },
//         right: {
//             value: 15,
//             left: {
//                 value: 12,
//                 left: null,
//                 right: { value: 13, left: null, right: null }
//             },
//             right: {
//                 value: 20,
//                 left: { value: 17, left: null, right: null },
//                 right: { value: 22, left: null, right: null }
//             }
//         }
//     }
// }



// // Depth First Search
// // function iterate(tree) {
// //     // console.log(tree)

// //     if (tree.left) iterate(tree.left)
// //     console.log(tree.value)
// //     if (tree.right) iterate(tree.right)
// // }
// // // iterate(tree.root)


// // Breadth First Search
// // function BFS(tree) {
// //     let queue = [tree.root]
// //     let visited = []
// //     while (queue.length) {
// //         let node = queue.shift()
// //         visited.push(node.value)
// //         if (node.left) {
// //             queue.push(node.left)
// //         }
// //         if (node.right) {
// //             queue.push(node.right)
// //         }
// //     }
// //     console.log(visited)
// //     return visited
// // }
// // BFS(tree)


// // iteration of binary search 
// const result = []
// function iteration(root, level) {
//     if (!root) return;
//     console.log(root.value)
//     if (result[level]) { result[level].push(root.value) }
//     else { result[level] = [root.value] }
//     iteration(root.left, level + 1)
//     iteration(root.right, level + 1)
//     return result.map((el, index) => index % 2 === 0 ? el : el.reverse())
// }
// console.log(iteration(tree.root, 0))


// [1,2,2,null,3,null,3]

//                1
//           2       2
//      null   3    null  3
const tree = {
    value: 1,
    left: {
        value: 2,
        left: null,
        right: {
            value: 3,
            left: null,
            right: null
        }
    },
    right: {
        value: 2,
        left: null,
        right: {
            value: 3,
            left: null,
            right: null
        }
    }
}


// function to find if two tree are mirror of each other

function isMirror(tree1, tree2) {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;
    if (tree1.value !== tree2.value) return false;
    return (isMirror(tree1.right, tree2.left) && isMirror(tree1.left, tree2.right))
}

// function to find maximum depth of the tree 
function depth(tree) {
    if (!tree) return 0;
    return Math.max(depth(tree.left), depth(tree.right)) + 1;
}

// function to convert sorted into binary search tree
/**
 * 
 * [0,-3,9,-10,null,5]
 *            0
 *      -3          9
 * -10      null  5     null
 * 
 *            0
 *      -10         5
 * null     -3  null   9
Explanation: [0,-10,5,null,-3,null,9} arr 
 */
function sortedArrayToBST(arr) {
    if (!arr.length) return null;
    let nodeIndex = ~~(arr.length / 2)
    const a = arr.splice(nodeIndex)
    let yoo = new node(a.shift())

    yoo.right = sortedArrayToBST(a)
    yoo.left = sortedArrayToBST(arr)
    return yoo
}
// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))
function findDepth(tree) {
    if (!tree) return 0;
    return Math.max(findDepth(tree.left), findDepth(tree.right)) + 1
}
// console.log(findDepth(sortedArrayToBST([-10, -3, 0, 5, 9])))

[1, 2, 2, 3, null, null, 3, 4, null, null, 4]


let a = { "val": 1, "left": { "val": 2, "left": { "val": 3, "left": { "val": 4, "left": null, "right": null }, "right": null }, "right": null }, "right": { "val": 2, "left": null, "right": { "val": 3, "left": null, "right": { "val": 4, "left": null, "right": null } } } }
// { left: 3 }
// { right: 3 }

