// let obj={}
// let obj1={}
// const str="vinaysinghgautam"
// const str1="vinaysinghgautam"
// function comapre(str ,str1){
// for(el of str){
//     if(el in obj){
//        obj[el]=obj[el]+1
//     }
//     else{
//         obj={...obj,[el]:1}
//     }
// }
// for(el of str1){
//     if(el in obj1){
//        obj1[el]=obj1[el]+1
//     }
//     else{
//         obj1={...obj1,[el]:1}
//     }
// }
// for(let i in obj){
//     if(!(i in obj1 )){
//         return false
//     }
//     if(obj[i]!=obj1[i]){
//         return false
//     }
//     return true
// }
// }
// console.log(comapre(str,str1))

// const frequencyCounter=function(a,b){
//     let aInString=a.toString()
//     let bInString=b.toString()
//     let counterOfA={}
//     for(let i=0;i<aInString.length;i++){
//         if(aInString[i] in counterOfA){
//             counterOfA[aInString[i]]=parseInt(counterOfA[aInString[i]])+1
//         }
//         else{
//             counterOfA[aInString[i]]=1
//         }
//     }
//     let counterOfB={}
//     for(let i=0;i<bInString.length;i++){

//         // console.log(bInString[i])
//         if(bInString[i] in counterOfB){
//             // console.log(parseInt(counterOfB[bInString[i]]))
//             counterOfB[bInString[i]]=parseInt(counterOfB[bInString[i]])+1
//         }
//         else{
            
//             counterOfB[bInString[i]]=1
//         }
//     }
//    for(i in counterOfA){
//     if(i in counterOfA){
//         if(counterOfA[i]===counterOfB[i]){
//             console.log("Its a match at value",i, counterOfB[i],counterOfA[i] )
//         }
//     }
//    }
// }
// frequencyCounter(10465564564763563500,5006556576654560)

const checkForDuplicates =function(){
    const values =Object.values(arguments)
    let count={}
    values.forEach(el=>{
        if(el in count){
           console.log(false)
        }
        else{
            count[el]=1
        }
    })
     return true
    }
console.log(checkForDuplicates(1,1,2,3,4,5,6))