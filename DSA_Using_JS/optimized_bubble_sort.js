class bubble_sort {
    constructor(arr) {
        this.arr = arr
    }
    algo() {
        let i, j;
        for (i = 0; i < this.arr.length - 1; i++) {
            let flag = false
            for (j = 0; j < this.arr.length - i; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    let flag  = true
                    let temp = this.arr[j]
                    this.arr[j] = this.arr[j + 1]
                    this.arr[j + 1] = temp
                }
            }
            if(flag === false){
                break
            }
        }
        return this.arr
    }
}

const algo = new bubble_sort([9, 7, 3, 6, 2])
console.log(algo.algo())
