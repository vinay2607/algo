const array =[1,1,2,2,2,3,3,3,4,4,4,5,5,5,5,6,6,6,7,7,7,7,10]
// let obj={}
// array.forEach(el=>{
//     if(el in obj){
//         obj[el]=obj[el]+1
//     }
//     else{
// obj={
//         ...obj,
//         [el]:1
//     }
//     }
// })
// console.log(obj)
// console.log(Object.keys(obj).length)
let uniqueArray=[]
array.forEach(el=>{
    if(uniqueArray.indexOf(el)===-1){
        uniqueArray.push(el)
    }
})
console.log(uniqueArray.length)

