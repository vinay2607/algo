const value = [12, 1, 2, 3, 2, 4, 6, 4, 3, 5, 3, 2, 4, 6, 7, 7, 65, 44, 2, 21, 23, 45, 6, 45, 3, 3]
let i = 0
while (i < 19) {
    let palceholder = value[0];
    let pivot = 0
    for (let i = 0; i < value.length; i++) {

        if (palceholder > value[i]) pivot++
    }
    console.log(pivot)
    console.log(value.length)
    let swap = palceholder
    value[0] = value[pivot]
    value[pivot] = swap
    i++;
}
console.log(value)
