let star=""
for (let i = 0; i <6;i++){
    for (let j = 6; j >i;j--){
        star=star+"*"
    }
     star+="\n"
}
console.log(star)