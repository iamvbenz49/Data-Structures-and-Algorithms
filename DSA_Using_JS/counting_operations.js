function sumOne(n) {
    let sum = 0;
    for (i = 0; i < n; i++) {
        sum += i;
    }
    return sum; // i+i+i..... = i operations
    //Big O(N)
}

function sumTwo(n) {
    return n * (n + 1) / 2 //a addition operation,a multiplication operation,a division operation
        //B
}

let t1, t2;

t1 = Math.floor(Date.now())
ansOne = sumOne(2500000000)
t2 = Math.floor(Date.now())
console.log("Using for loop", (t2 - t1) / 1000)


t1 = Date.now()
ansTwo = sumTwo(25000000000)
t2 = Date.now()
console.log("Using for loop ", t2 - t1)