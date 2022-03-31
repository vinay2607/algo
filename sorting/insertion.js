// let arr=[10,11,12,13,1,2,3,4,5,9,8,7,6,5,4,3,2,1]
// for (let i = 0; i < arr.length; i++){
//     for (let j = i-1;j>=0; j--){
//         if(arr[j]>arr[i]){
            
//             // break;
//         }
//     }
// }
let arr=[1,2,9,76,4]
for(let i = 0;i<arr.length;i++){

    if(arr[i]>arr[i+1]){
        console.log(arr[i+1])
        for(let j = i;j>=0;j--){
            if(arr[j]<arr[i+1]){
                console.log("Good",arr[j],arr[i+1])
                break;
            }
            
        }
    }
    
}