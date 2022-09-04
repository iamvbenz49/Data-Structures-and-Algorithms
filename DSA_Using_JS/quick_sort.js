class quick_sort {
    constructor(arr) {
        this.arr = arr
    }
    algo(s, e) {
        if (s < e) {
            let p = this.partition(s, e)
            this.algo(s, p - 1)
            this.algo(p + 1, e)
        }
    }
    partition(s, e) {
        let pivot = this.arr[e]
        let pindex = s
        for (let i = s; i < e; i++) {
            if (this.arr[i] < pivot) {
                let temp = this.arr[i]
                this.arr[i] = this.arr[pindex]
                this.arr[pindex] = temp
                pindex++
            }
        }
        let temp = this.arr[e]
        this.arr[e] = this.arr[pindex]
        this.arr[pindex] = temp
        return pindex
    }
}
let sort = new quick_sort([8, 3, 4, 2, 8, 1, 7, 3, 9, 2])
sort.algo(0, 9)
console.log(sort.arr)
