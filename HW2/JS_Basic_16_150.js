//16. Write a JavaScript program to compute the sum of the two given integers.
// If the two values are same, then returns triple their sum.
function sum16 (firstGN, secondGN) {
    if (firstGN == secondGN) return firstGN * 6;
    else return firstGN + secondGN;
}
console.log (sum16(3, 5));
console.log (sum16(5, 5));
console.log (sum16(7, 5));
console.log (sum16(-3, 5));
console.log (sum16(-3, -5));
console.log (sum16(-5, -5));