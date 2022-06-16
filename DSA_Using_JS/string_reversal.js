let string = "hello";

function reverseString(str) {
    var arr = []
    for (i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    arr.reverse()
    result = "";
    for (i = 0; i < str.length; i++) {
        result = result + arr[i]
    }
    return result
} //time complexity O(n^2)

let t1 = reverseString(string);
console.log("Big O(n^2) ===> ", t1)

function reverseString2(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        res = str[i] + res;
    }
    return res //time complexity O(n)
}

let t2 = reverseString2(string);
console.log("Big O(n) ===> ", t2)