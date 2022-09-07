class countingSort {
    constructor(arr) {
        this.arr = arr
    }
    algo() {
        let output_arr = []
        let count_arr = []
        let range = 9
        for (let i = 0; i < range + 1; i++) {
            count_arr[i] = 0
        }
        for (let i = 0; i < this.arr.length; i++) {
            output_arr[i] = 0
        }
        for (let i = 0; i < this.arr.length; i++) {
            count_arr[this.arr[i]] += 1
        }
        for (let i = 1; i < range + 1; i++) {
            count_arr[i] = count_arr[i] + count_arr[i - 1]
        }
        for (let i = 0; i < output_arr.length; i++) {
            output_arr[--count_arr[this.arr[i]]] = this.arr[i]
        }
        return output_arr
    }
}
let algo = new countingSort([5, 2, 3, 1, 6, 9, 8, 7])
console.log(algo.algo())
