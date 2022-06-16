function exampleOne(arr) {
    for (i = 0; i < arr.length; i++) { // n times
        for (j = 0; j < arr.length; j++) { // n times
            console.log(arr[j])
        }
    }
}

function examplTwo(arr, arr1) {
    for (i = 0; i < arr.length; i++) { //m times
        for (j = 0; j < arr1.length; j++) { //n times
            console.log(arr1[j])
        }
    }
}
console.log("EXAMPLE ONE :")
exampleOne(["hello", "hie", "whatsup"]) //Big O(n*n) = Big O(n^2) here 3^3

console.log("EXAMPLE TWO :")
examplTwo([1, 2, 3], [9, 4]) //Big O(m*n) = Big O(m+n)  here 3*2