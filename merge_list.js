class merge_sort {
    constructor(arr) {
        this.arr = arr
    }
    algo(l, r) {
        if (l < r) {
            let m = Math.floor((l + r) / 2)
            this.algo(l, m)
            this.algo(m + 1, r)
            this.merge(this.arr, l, m, r)
        }
    }
    merge(arr, l, m, r) {
        let i = l
        let j = m + 1
        let k = l
        let temp = []
        while (i <= m && j <= r) {
            if (arr[i] <= arr[j]) {
                temp[k] = arr[i]
                i++;
                k++;
            } else {
                temp[k] = arr[j]
                j++;
                k++;
            }
        }
        while (i <= m) {
            temp[k] = arr[i]
            k++;
            i++;
        }
        while (j <= r) {
            temp[k] = arr[j]
            j++;
            k++;
        }
        for (let n = l; n <= r; n++) {
            arr[n] = temp[n]
        }
    }
}
const algo = new merge_sort([9, 7, 3, 3, 6, 7, 2, 2])
algo.algo(0, 7)
console.log(algo.arr)
