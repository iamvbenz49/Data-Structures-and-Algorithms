function reverseStr(str) {
    revStr = ""
    for (let i = 0; i < str.length; i++) {
        revStr = str[i] + revStr;
    }
    if (revStr === str) {
        return true
    } else {
        return false
    }
}
str = "madvam";
let answer = reverseStr(str);
console.log("String is a ", answer)