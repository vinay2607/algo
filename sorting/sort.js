const arrayOfObject = [
    {
        name: "a",
        age: 12
    },
    {
        name: "b",
        age: 12
    },
    {
        name: "c",
        age: 12
    },
    {
        name: "d",
        age: 50
    },
    {
        name: "b",
        age: 20
    },
    {
        name: "a",
        age: 25
    }
]
const sortArray = arrayOfObject.sort((a, b) => {
    if (a.name > b.name) return 1;
    else return -1;
})
const result = sortArray.sort((a, b) => {
    if (a.name === b.name) {
        return a.age - b.age;
    }
})
console.log(result)