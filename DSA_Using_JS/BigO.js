function shoutHelloOne(n) {
    for (i = 0; i < n; i++) {
        console.log(i);
    }
}

function shoutHelloTwo(n) {
    for (i = 0; i < 4; i++) {
        console.log(i)
    }
}

shoutHelloOne(9) //Big O (n)
shoutHelloTwo(9) //Big O (4)