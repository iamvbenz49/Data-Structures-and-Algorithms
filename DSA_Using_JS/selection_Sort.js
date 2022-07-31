class sortingAlgo {
    constructor(arr) {
        this.arr = arr
    }
    algo() {
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 1 + i; j < this.arr.length; j++) {
                if (this.arr[i] > this.arr[j]) {
                    let swap = this.arr[i]
                    this.arr[i] = this.arr[j]
                    this.arr[j] = swap
                }
            }
        }
        return this.arr
    }
}

algo = new sortingAlgo([2, 3, 1, 4, 8, 6])
console.log(algo.algo())
