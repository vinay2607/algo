// function power(n,m){
// if(m===0){return 1}
// return  n * power(n,m-1)
// }
// console.log(power(100,1))

// function fact(n){
// if(n==0){return 1}
// if(n==1){return 1}
// return n*fact(n-1)
// }
// console.log(fact(5))

// function multiply(arr){
// if(arr.length==0){return 1}
// return arr.splice(0,1)*multiply(arr)
// }
// console.log(multiply([1,2,3]))

// function add(n){
//     if(n===0){return 1}
//     return n+add(n-1)
// }
// console.log(add(6))

// function fib(n){
//     let arr=[1,1]
//     if(arr.length<n){
//         let length= arr.length
//         console.log("30",length)
//         arr.push((arr[length-1]+arr[length-2]))
//         console.log("32",arr)
//         fib(n)
//     }
//     else if(arr.length===n)return arr[n]
//     // console.log(arr)
// }
// console.log(fib(10))

// function reverse(text) {
//     if(text.length===1)return text
//   const a=  text.slice(1)
//   return reverse(a)+text[0]
// console.log(a)
// }
// console.log(reverse("vinay"))

// function isPalindrome(text){
//     if(text.length===1) return text
//     return isPalindrome(text.slice(1))+text[0]
// }
// // console.log(isPalindrome("tacocat")==="tacocat")
// function flatten(arr){
//     return arr.map((el)=>{
//         if(Array.isArray(el)){
//             console.log("57",el)
//             console.log(flatten(el))
//             return flatten(el)
//         }else{
//             console.log("60",el)
//             return el}})
// }
// console.log(flatten([1, 2, 3, [4, 5] ]))
// var sum=0
// function nestedEvenSum (obj) {
//     // add whatever parameters you deem necessary - good luck!
//     for(let i in obj){
//         console.log(i)
//         if(typeof obj[i]==='object'){
//             nestedEvenSum(obj[i])
//         }
//         if(typeof obj[i]==='number'&&(obj[i]%2===0)){
//             sum=sum+obj[i]
//         }
//     }
//     console.log(sum)
//   }
//   nestedEvenSum(obj1)

// function nestedEvenSum (obj, sum=0) {
//     for (var key in obj) {
//         if (typeof obj[key] === 'object'){
//             sum += nestedEvenSum(obj[key]);
//         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
//             sum += obj[key];
//         }
//     }
//     return sum;
// }
// var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }
//   var obj2 = {
//     a: 2,
//     b: {
//         b: 2, bb: {
//             b: 3, bb: {
//                         b: 2}}},
//     c: {
//         c: 
//             {c: 2}, 
//             cc: 'ball', 
//             ccc: 5},
//     d: 1,
//     e: 
//         {e: 
//             {e: 2}, 
//             ee: 'car'}
//   };
// //   nestedEvenSum(obj1); // 6
//   console.log(nestedEvenSum(obj2)); // 10

// const a=["vinay","singh","gautama"]
// function capitalize(arr){
//     const val=
//     // return capitalize(arr)
// }