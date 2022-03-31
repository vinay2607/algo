let a="({[}]])"
let obj={}
for(let i = 0; i < a.length; i++){
if(obj[a[i]]===undefined)obj[a[i]]=1
else{obj[a[i]]=obj[a[i]]+1}
}
obj["("]===obj[")"]?console.log((obj["("]+obj[")"])%2===0):console.log(false)
obj["{"]===obj["}"]?console.log((obj["{"]+obj["}"])%2===0):console.log(false)
obj["["]===obj["]"]?console.log((obj["["]+obj["]"])%2===0):console.log(false)