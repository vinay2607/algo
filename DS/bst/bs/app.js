const util = require('util');

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        const yo=new Node(val)
        if(this.root===null){
            this.root=yo
            return this
        }
        else{
            let current=this.root
            console.log(1)
            while(true){
            if(val>current.value){
                if(current.right===null){
                    current.right=yo
                    return this
                }
                else{
                    current=current.right
                    console.log(10)
                }
            }
            else if(val<current.value){
                if(current.left===null){
                    current.left=yo
                    return this
                }
                else{
                    current=current.left
                    console.log(20)
                }
        }
        }
    }
}}
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
let tree=new BinarySearchTree()
tree.insert(100)
tree.insert(200)
tree.insert(50)
tree.insert(25)
tree.insert(75)
tree.insert(150)
console.log(util.inspect(tree.insert(250),false,null ,true))

