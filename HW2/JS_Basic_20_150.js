//20. Write a JavaScript program to check from two given integers,
// whether one is positive and another one is negative.
function check20 (num1, num2) {
    return ((num1 < 0 && num2 > 0) || (num2 < 0 && num1 > 0));
}

console.log(check20(-1, 5));
console.log(check20(1, -5));
console.log(check20(1, 5));
console.log(check20(-1, -5));
console.log(check20(0, 5));
console.log(check20(-1, 0));
console.log(check20(0, 0));