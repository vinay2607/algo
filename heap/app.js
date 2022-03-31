const arr = [100, 50, 200]
function bubbleHeap(arr) {
    let index = arr.length - 1
    const value = arr[index]
    while (true) {
        const newValue = Math.floor((index - 1) / 2)
        let temp = arr[newValue]
        if (value > temp) {
            arr[newValue] = value
            arr[index] = temp
            index = newValue
        }
        else {
            console.log(arr)
            return arr
        }
    }
}
// bubbleHeap(arr)
// // function that return higest of two values
function max(a, b) {
    console.log(a, b)
    return a > b ? a : b
}
// // bubbleHeap(arr)
// function extractMax(arr) {
//     const yoo = arr.pop()
//     arr[0] = yoo
//     const value = arr[0]
//     let index = 0
//     while (index < arr.length) {
//         let firstHead = 2 * index + 1
//         let secondHead = 2 * index + 2
//         if (firstHead < arr.length - 1) {
//             let maxValue = max(arr[firstHead], arr[secondHead])
//             if (maxValue > value) {
//                 const indexOfMaxValue = arr.indexOf(maxValue)
//                 arr[indexOfMaxValue] = value
//                 arr[index] = maxValue
//                 index = indexOfMaxValue
//             }
//         }
//         else {
//             console.log(arr)
//             return arr
//         }
//     }
// }
// extractMax([33, 39, 41, 18, 27, 12])


class Node {
    constructor() {
        this.value = []
    }
    insert(value) {
        this.value.push(value)
        if (this.value.length > 1) {
            return this.bubbleHeap()
        }
    }
    bubbleHeap() {
        let index = this.value.length - 1
        const value = this.value[index]
        while (true) {
            const newValue = Math.floor((index - 1) / 2)
            let temp = this.value[newValue]
            if (value > temp) {
                this.value[newValue] = value
                this.value[index] = temp
                index = newValue
            }
            else {
                return this.value
            }
        }
    }
    remove() {
        const yoo = this.value.pop()
        this.value[0] = yoo
        const value = this.value[0]
        let index = 0
        while (index < this.value.length) {
            let firstHead = 2 * index + 1
            let secondHead = 2 * index + 2
            if (firstHead < this.value.length - 1) {
                let maxValue = max(this.value[firstHead], this.value[secondHead])
                if (maxValue > value) {
                    const indexOfMaxValue = this.value.indexOf(maxValue)
                    this.value[indexOfMaxValue] = value
                    this.value[index] = maxValue
                    index = indexOfMaxValue
                }
            }
            else {
                console.log(this.value)
                return this.value
            }
        }
    }
}
const heap = new Node()
heap.insert(100)
heap.insert(50)
heap.insert(200)
heap.insert(150)
heap.insert(75)
heap.insert(120)
console.log(heap.insert(10))
console.log(heap.remove())
console.log(heap.remove())

