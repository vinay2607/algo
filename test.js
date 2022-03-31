// Write a function to check if paranthesis are balanced in a given string e.g "(()))"
let paranthesis = (arg) => {
    let obj = {}
    for (let i = 0; i < arg.length; i++) {
        !obj[arg[i]] ? obj[arg[i]] = 1 : obj[arg[i]] = obj[arg[i]] + 1
    }
    console.log(obj)
    return obj[')'] === obj['(']
}
// console.log(paranthesis("((()))"))


// Write a function to flatten an array [1, [2, [[[3]]]]] => [1,2,3]

let flat = (arr) => {
    return arr.flat(Infinity)
}
console.log(flat([1, [2, [[[3]]]]]))

// wtite a mongo query to fetch users where email contains "bob"

users.find({ email: new Regex("bob", i) })
// Remove duplicate elements from array and sort elements in descending order of length

let newArr = [...new Set(arr)]
newArr.sort((a, b) => b - a)

/*"If we have a collection sales that has following fields:
{
    date: ISODate(),
    product_name: ""some product"",
    price: 2342
}
Write a mongo query to generate monthly sales report per product
e.g.
January: [ {product: 'product1', total_sale: 32342}, { product: 'product2', total_sale: 10000 } ]"
*/

[
    {
        $group: {
            _id: {
                product_name: $product_name,
                month: { $month: $data }
            },
        {
    total_sale: { $sum: price }
}
    }
}
{
    $project: {
        month:
    }
}
]


// If we have a collection "user" with name, age, gender, write a mongo query to find unique names of females

{
    $match: {
        gender: "female"
    }, {

    }
}
