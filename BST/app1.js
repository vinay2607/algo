const util = require('util');
// implementing BST
class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value
    }
}
class Bst {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const yoo = new Node(value)
        if (this.root === null) {
            this.root = yoo
            return this
        }
        else {
            let current = this.root
            while (true) {
                if (value > current.value) {
                    if (current.right === null) {
                        current.right = yoo
                        return this
                    }
                    else {
                        current = current.right
                    }
                }
                else if (value < current.value) {
                    if (current.left === null) {
                        current.left = yoo
                        return this
                    }
                    else {
                        current = current.left
                    }
                }
            }
        }
    }
}
// const value = new Bst()
// value.insert(100)
// value.insert(50)
// value.insert(200)
// value.insert(150)
// value.insert(250)
// value.insert(600)
// console.log(util.inspect(value.insert(700), false, null, true))


// iterate a Tree
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

//  Breath first search

function bfs(tree) {
    const queqe = [tree.root];
    const visited = []
    while (queqe.length) {
        const current = queqe.shift();
        visited.push(current.value);
        if (current.right) queqe.push(current.right)
        if (current.left) queqe.push(current.left)
    }
    console.log(visited);
    return visited;
}
// bfs(bst)

// depth first search
function dfs(tree) {
    const val = []
    function iterate(plant) {
        if (plant.right) iterate(plant.right)
        val.push(plant.value)
        if (plant.left) iterate(plant.left)
    }
    iterate(tree.root)
    console.log(val)
}
dfs(bst)