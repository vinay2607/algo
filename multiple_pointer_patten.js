// // let array=[-3,-2,-1,0,-1,2,3];
// // let left=0
// // let right =array.length-1;
// // while(left<right){
// //     let sum=(array[left]+array[right])
// //     if(sum){
// //         console.log(array[left],array[right])
// //     }
// //     else if(sum>0){
// //         left++
// //     }
// //     else{
// //         right--
// //     }
// // }
// const averge= function(array,var2){

//     let left=0
//     let right =array.length-1
//     while(left<right){
//         let average=(array[left]+array[right])/2 
//         if(average===var2){
//             console.log(`average of ${array[left]} and ${array[right]} is: `,average)
//             break;
//         }
//         else if(average<var2){
//             left++
//         }
//         else{
//             right--
//         }
//     }
// }
// averge([1,3,3,5,6,7,10,12,19],8)

// const isSequence =function(string1,string2){

//   const one=  string1.split("")
//   const two= string2.split("")
//   one.forEach(el=>{

//     if(!(two.indexOf(el)===-1)){
//         two.splice(0,(two.indexOf(el)+1))
//         // console.log("in if loop",el,two)
//         one.splice(0,(one.indexOf(el)+1))
//         console.log(one)
//     }else{
//         // console.log("Not a subset")
//     } 
//   })
//   console.log(one)
//   (one.length)?console.log(true):console.log(false)

// }
// isSequence("hello","helloworld")

const a=[1,2,3,2,1,4,6,8,5,3,2,11,22,1,11,43,65,43,98,45]
for(let i=1;i<a.length;i++){
  let temp
  for(let j=1;j<a.length;j++){
    if(a[j]>a[i]){
      temp=a[i]
      a[i]=a[j]
      a[j]=temp
    }
  }
}
console.log(a)