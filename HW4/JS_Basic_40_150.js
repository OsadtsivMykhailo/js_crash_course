//40. Write a JavaScript program to check from two given integers
// whether one of them is 8 or their sum or difference is 8. 
function check40 (int1, int2) {
    if (((int1 == 8 || int2 == 8) || (int1 + int2 == 8 || int2 - int1 == 8))
    || (int1 - int2 == 8)) {
        return true;
    } else {
        return false;
    }
}

console.log (check40(0, 8));
console.log (check40(22, 8));
console.log (check40(8, 22));
console.log (check40(0, 0));
console.log (check40(-4, 4));
console.log (check40(4, -4));
console.log (check40(4, 4));