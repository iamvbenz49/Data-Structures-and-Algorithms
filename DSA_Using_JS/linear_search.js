class LinearSearch {
    constructor(arr) {
        this.arr = arr
    }
    algorithm(ele) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === ele) {
                return i
            }
        }
        return "element not found"
    }
}

let arr = new LinearSearch([1, 2, 3, 45, 6, 7])
console.log(arr.algorithm(3))
