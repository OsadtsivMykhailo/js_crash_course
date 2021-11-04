//39. Write a JavaScript program to compute the sum of the two given integers,
// If the sum is in the range 50..80 return 65 other wise return 80.
function task39 (int1, int2) {
    let sum = int1 + int2;
    if (sum >=50 && sum <= 80) {
        return 65;
    } else {
        return 80;
    }
}

console.log(task39(1, 4));
console.log(task39(11, 44));
console.log(task39(232, 4));
console.log(task39(-1, 4));