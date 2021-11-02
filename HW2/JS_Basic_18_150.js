//18. Write a JavaScript program to check two given numbers and return true
// if one of the number is 50 or if their sum is 50.
function check18 (n1, n2) {
    return ((n1 + n2 == 50 || n1 == 50) || n2 == 50);
}

console.log(check18(23, 27));
console.log(check18(50, 27));
console.log(check18(23, 50));
console.log(check18(50, 50));
console.log(check18(23, 22));