console.log("Guess a number between 1 to 50");

low = 0
high = 50
let inp_keyword;


while (true) {
    mid = Math.floor(low + (high - low) / 2)
    inp_keyword = prompt("Is ypur number greater than or less than " + mid);
    if (inp_keyword === "greater") {
        low = mid
    } else if (inp_keyword === "lesser") {
        high = mid
    } else if (inp_keyword = "you got it") {
        console.log(mid)
        break;
    }
}