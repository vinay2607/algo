class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        return this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
        return this
    }
}

let heap = new MaxBinaryHeap();
heap.insert(100)
heap.insert(50)
heap.insert(200)
heap.insert(150)
heap.insert(75)
heap.insert(120)
console.log(heap.insert(10))


