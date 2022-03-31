// var arr= [1,3,5,7,8,9,11,15,18,19]
// function serach(array,value) {
//     let first=0
//     let last=array.length-1
//     let medium=Math.floor((first+last)/2)
//     if(value<array[medium]) {
//         array.splice(medium,last)
//         console.log("8",array)
//         console.log('9',value,array[medium])
//         serach(array,value)
//     }
//     else if(value>array[medium]) {
//         array.splice(first,medium)
//         console.log('12',array)
//         console.log('15',value,array[medium])
//         serach(array,value)
//     }
//     else if(value===array[medium]) {
//         console.log('19',value,array[medium])
//         console.log(medium)
//         return medium
//     }
// }
// console.log(serach(arr,11))
var arr = [1, 3, 5, 7, 8, 9, 11, 15, 18, 19]
function serach(array, value) {
    let first = 0
    let last = array.length - 1
    let medium
    while (true) {
        medium = Math.floor((first + last) / 2)

        if (value < array[medium]) {

            last = medium-1
        }
        else if (value > array[medium]) {

            first = medium+1
        }
        else if (value === array[medium]) {
            return medium
        }
        if ((last === (first + 1)&& first===medium)||first===medium) return -1
    }
}
console.log(serach(arr, 100))
