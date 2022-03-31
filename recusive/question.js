// const a = {
//     firstname: 'vijay',
//     lastname: 'chouhan',
//     address: {
//         city: 'Pune',
//         state: 'Maharstra',
//         phoneNumber: {
//             countryCode: '+91',
//             mobile: '9730132126',
//         }
//     }
// }
// const output = {
//     user_firstname: 'vijay',
//     user_lastname: 'chouhan',
//     user_address_city: 'Pune',
//     user_address_state: 'Maharstra',
//     user_address_phoneNumber_countryCode: '+91',
//     user_address_phoneNumber_mobile: '9730132126'
// }

// function flat(obj, user) {
//     let parent = user
//     let empty = {}
//     let key = {}
//     for (let i in obj) {
//         if (typeof obj[i] === 'object') {
//             return { ...empty, ...flat(obj[i], parent + "_" + i) };
//         }
//         else {
//             empty = { ...empty, ...{ [parent + "_" + i]: obj[i] } }
//         }
//     }
//     // sconsole.log(empty)
//     return empty
// }
// console.log(flat(a, "user"))

// 7
// 76
// 765
// 7654
// 76543
// 765432
// 7654321
// 765432
// 76543
// 7654
// 765
// 76
// 7
// let txt = ""
// for (let i = 0; i <= 7; i++) {
//     for (let j = 7; j > i; j--) {
//         txt = txt + j
//     }
//     console.log(txt)
//     txt = ""
// }
// for (let i = 0; i < 8; i++) {
//     let value = ""
//     for (let j = 1; j <= i; j++) {
//         let txt = 8
//         // console.log(j)
//         value = value + (txt - j)
//     }
//     console.log(value)
//     value = ""
//     // 
// }
// let txt = ""
// for (let i = 1; i < 7; i++) {
//     for (let j = 7; j > i; j--) {
//         txt = txt + j
//     }
//     console.log(txt)
//     txt = ""
// }
// sum(1)(2)(3)

// var data = {
//     firstname: 'vijay',
//     lastname: 'chouhan',    
//     address: {
//         city: 'Pune',
//         state: 'Maharstra',
//         phoneNumber: {
//             countryCode: '+91',
//             mobile: '9730132126'
//         }
//     },
//     hobby: ['swimming', 'cricket'],
// }
// var newObj = {};
// function caps(obj) {
//     let newObj = {};
//     for (let key in obj) {        
//         if (typeof obj[key] === 'object') {            
//             if (Array.isArray(obj[key])) {
//                 newObj = { ...newObj, [key.toUpperCase()]: obj[key] }
//             } else {
//                 newObj = { ...newObj, [key.toUpperCase()]: caps(obj[key]) }
//             }
//         } else {            
//             newObj = { ...newObj, [key.toUpperCase()]: obj[key] }
//         }
//     }
//     return newObj;
// }

// const response = caps(data);

// console.log(response)
function sum(x) {
    // console.log(x)
    return (y) => { if (y) { return sum(x + y) } 
    return x;
}
}

// console.log(sum(1)(2)(3))
//  function sum (a) {
//     return (b)=> {
//       if (b) {
//         return sum(a+b); // it takes an argument and return a function which again can take an argument.
//       }
//       return a; // it will keep on adding 1+2+3+4..
//     }
//   };
  console.log(sum(1)(2)()); //3
  console.log(sum(1)(2)(3)(4)()); //10