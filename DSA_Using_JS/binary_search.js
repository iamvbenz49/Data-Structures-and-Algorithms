class binarySearchAlgo {
    constructor(arr) {
        this.arr = arr
    }
    Algo(element) {
        let start = 0
        let end = this.arr.length - 1
        while (end > start) {
            let mid = Math.floor(start + (end - start) / 2)
            if (this.arr[mid] === element) {
                return mid
            } else if (this.arr[mid] > element) {
                end = mid
            } else if (this.arr[mid] < element) {
                start = mid
            }
        }
        return "element not found"
    }
}

const algo = new binarySearchAlgo([1, 2, 3, 4, 5, 6, 7, 8])
console.log(algo.Algo(5))
