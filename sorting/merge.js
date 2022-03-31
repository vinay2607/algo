// let a=[2,5,7,9,10,14,18,19,22,26]
// let b=[1,3,5,8,10,15,17,19,21,23]
// let a=[1,12]
// let b=[1,12]
// let sum=a.length+b.length
// let c=[]
// function merge(a,b){
//     let sum=a.length+b.length
//     while(c.length<sum){
//     console.log(a,b)
//     if(a[0]>=b[0]){
//         console.log("hi")
//         c.push(b.shift())
//         console.log("==========>",c)
//     }
//     else if(b[0]>=a[0]){
//         c.push(a.shift())
//     }
//     else if(b[0]===undefined){
//         c.push(a.shift())
//     }
//     else if(a[0]===undefined){
//         c.push(b.shift())
//     }
//     console.log(c)

// }
// return c
// }
// console.log(merge(a,b))
// function split(a){
//     let b=a.splice(0,a.length/2)
//     if(b.length===1&&a.length===1) return 
//     split()
//     return a,b
// }
// function merge(arr1, arr2) {
//     const result = [];
//     let p1 = 0;
//     let p2 = 0;

//     let finalResultLength = arr1.length + arr2.length;
//     while (result.length < finalResultLength) {
//         let v1 = arr1[p1];
//         let v2 = arr2[p2];
//         // if no more values in arr1 OR if v2 is smaller
//         if (!v1 || v2 < v1) {
//             result.push(v2);
//             p2++;
//         // since we check the result length,
//         // we know that we have a v1 and that it's smaller
//         } else {
//             result.push(v1);
//             p1++;
//         }
//     }
//     return result;
// }
// function mergeSort(arr) {
//     let result = arr.map(x => [x]);
//     console.log(result);
//     // [[x],[x],[x],[x]] -> [[x,x],[x,x]] -> [[x,x,x,x]]
//     while (result.length > 1) {
//         const newResult = []
//         for (let i = 0; i < result.length; i += 2) {
//             // merge this array and next item if it exists (or empty array if not)
//             const newMergedSubarray = merge(result[i], result[i + 1] || []);
//             console.log(newMergedSubarray);
//             newResult.push(newMergedSubarray);
//             // console.log(newResult);
//         }
//         result = newResult;
//     }
//     // in case we were passed an empty array
//     return result[0] || [];
// } 
const value = [12, 1, 2, 3, 2, 4, 6, 4, 3, 5, 3, 2, 4, 6, 7, 7, 65, 44, 2, 21, 23, 45, 6, 45, 3, 3]
// // console.log(mergeSort(value))
// function mergeShort(arr){
//     console.log("arr ========>",arr)
//     if(arr.length<=1)return arr;
//     let mid=Math.floor(arr.length/2);
//     let left=mergeShort(arr.slice(0,mid));
//     console.log("left ========>",left)
//     let right=mergeShort(arr.slice(mid))
//     console.log("right ========>",right)
//     // console.log(left, right)
//     const value=merge(left,right)
//     console.log("value ========>",value)
//     return value
// }
// console.log(mergeShort(value))
// function mergeShort(arr){
//     let result =arr.map(x=>[x])
//     while(result.length>1){
//         let temArray=[]
//         for(let i=0; i<result.length; i+=2){
//             let mergeShortValue = merge(result[i],result[i+1]||[])
//             temArray.push(mergeShortValue)
//         }
//         result =temArray
//     }
//     return result[0]
// }
// console.log(mergeShort(value))
// value.sort()