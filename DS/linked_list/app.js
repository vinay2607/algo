// class node {
//     constructor(val) {
//         this.val = val;
//         this.next = null
//     }
// }
// // let list=new node(5)
// // list.next=new node(6)
// // list.next.next=new node(7)
// // list.next.next.next=new node(8)
// // console.log(list)
// class linkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val) {
//         let yo = new node(val)
//         if (this.length === 0) {
//             console.log(this.head)
//             console.log(this.tail)
//             this.head = yo
//             this.tail = this.head
//         }
//         else {
//             console.log(this.tail.next)
//             this.tail.next = yo;
//             this.tail = yo
//         }
//         this.length++
//         return this
//     }
//     pop(){
//         let yo = new node(val)
//         this.tail.next=null
//     }
// }
// let da = new linkedList()
// // console.log(da.push(10),da.push(20),da.push(30),da.push(40))
// // class list{
// //     constructor(value){
// //         this.value = value;
// //         this.head=null;
// //         this.tail=null;
// //     }
// // }
class node {
    constructor(val) {
        this.node = val
        this.next = null
    }
}
class list {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    push(cal) {
        const yo = new node(cal)
        if (this.size === 0) {
            this.head=yo
            this.tail=this.head
        }
        else{
            this.tail.next=yo
            this.tail=yo
        }
        this.size++
        return this
    }
}


// list: {
//     "head": {
//       "node": 10,
//       "next": {
//         "node": 20,
//         "next": {
//           "node": 30,
//           "next": {
//             "node": 40,
//             "next": {
//               "node": 50,
//               "next": {
//                 "node": 60,
//                 "next": {
//                   "node": 70,
//                   "next": {
//                     "node": 80,
//                     "next": null
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     "tail": {
//       "node": 80,
//       "next": null
//     },
//     "size": 8
//   } 


const aww=new list()
aww.push(10)
aww.push(20)
aww.push(30)
aww.push(40)
aww.push(50)
aww.push(60)
aww.push(70)
aww.push(80)
let lists=(aww.push(90)).head
// cosole.log(lists.head)
while(lists){
    // console.log(lists)
    console.log(lists.node)
    lists=lists.next
    }
