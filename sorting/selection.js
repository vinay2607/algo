let arr=[10,9,999,2,100,101,1]
//selection sort
console.log("hello")
for(let i=0;i<arr.length;i++){
    let min
    if(arr[i+1]) min=arr[i+1]
    for(let j=i+1;j<arr.length;j++){
        if(min>arr[j]){
            min=arr[j]
        }
        }
        if(min){
        let temp=min;
        let a= arr.indexOf(min)
        if(min<arr[i]){
        arr[a]=arr[i]
        arr[i]=temp
        }}
    }
console.log(arr)