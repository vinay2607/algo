let arr = [-2, 10, -3, -9, 4, -1, -2, 1, 5, -3]
function maxSum(arr) {
    let max = -Infinity
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    console.log(max)
}
maxSum(arr)