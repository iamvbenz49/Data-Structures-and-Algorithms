class insertion_sort {
    constructor(arr) {
        this.arr = arr
    }
    algo() {
        let i, key, j;
        for (i = 1; i < this.arr.length - 1; i++) {
            key = this.arr[i]
            j = i - 1
            while (j >= 0 && this.arr[j] > key) {
                this.arr[j + 1] = this.arr[j]
                j = j - 1
            }
            this.arr[j + 1] = key
        }
        return this.arr
    }
}
const algo = new insertion_sort([4, 3, 2, 10, 12, 1, 5, 6])
console.log(algo.algo())
