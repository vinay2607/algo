const util = require('util');
// class Value {
//     constructor(value) {
//         this.value = value
//         this.right = null
//         this.left = null
//     }
// }
// class Bst {
//     constructor() {
//         this.root = null
//     }
//     insert(val) {
//         const yo = new Value(val)
//         if (!this.root) {
//             this.root = yo
//         }
//         else {
//             let current = this.root
//             while (true) {
//                 if (val < current.value) {
//                     if (current.left === null) {
//                         current.left = yo
//                         return this
//                     } else {
//                         current = current.left
//                     }
//                 }
//                 else if (val > current.value) {
//                     if (current.right === null) {
//                         current.right = yo
//                         return this
//                     }
//                     else {
//                         current = current.right
//                     }
//                 }
//             }
//         }
//         return this
//     }
//     find(val) {


//     }
// }

// function iterateTree(tree) {
//     const queqe = []
//     const visited = []
//     queqe.push(tree.root)
//     while (queqe.length > 0) {
//         // console.log(queqe)
//         const current = queqe.shift()
//         visited.push(current.value)
//         if (current.left) {
//             queqe.push(current.left)
//         }
//         if (current.right) {
//             queqe.push(current.right)
//         }
//     }
//     return visited
// }
// console.log(iterateTree(bst))

// class Node {
//     constructor(value) {
//         this.value = value,
//             this.right = null,
//             this.left = null
//     }
// }
// class Bts {
//     constructor() {
//         this.root = null
//     }
//     insert(value) {
//         const yoo = new Node(value)
//         if (this.root === null) {
//             this.root = yoo
//         }
//         else {
//             let current = this.root
//             while (true) {
//                 if (value > current.value) {
//                     if (current.right === null) {
//                         current.right = yoo
//                         return this
//                     }
//                     else {
//                         current = current.right
//                     }
//                 }
//                 else if (value < current.value) {
//                     if (current.left === null) {
//                         current.left = yoo
//                         return this
//                     }
//                     else {
//                         current = current.left
//                     }
//                 }
//             }
//         }
//     }
// }
// const yooo = new Bts()
// yooo.insert(100)
// yooo.insert(50)
// yooo.insert(300)
// yooo.insert(250)
// yooo.insert(400)
// console.log(util.inspect(yooo.insert(350), false, null, true))
const bst = {
    root: {
        value: 100,
        right: {
            value: 300,
            right: {
                value: 400,
                right: null,
                left: { value: 350, right: null, left: null }
            },
            left: { value: 250, right: null, left: null }
        },
        left: { value: 50, right: null, left: null }
    }
}
// function iterateTree(tree) {
//     const queue = [tree.root]
//     const visited = []
//     while (queue.length) {
//         const current = queue.shift()
//         visited.push(current.value)
//         if (current.right) {
//             queue.push(current.right)
//         }
//         if (current.left) {
//             queue.push(current.left)
//         }
//     }
//     console.log(visited)
//     return visited
// }
// iterateTree(bst)
