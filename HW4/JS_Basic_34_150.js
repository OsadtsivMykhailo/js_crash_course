//34. Write a JavaScript program to find the larger number from
// the two given positive integers, the two numbers are in the range 40..60 inclusive.
function largerNumber34 (num1, num2) {
    if ((num1 >=40 && num1 <=60) && (num2 >=40 && num2 <=60)) {
        if (num1 > num2) {
            return num1;
        } else if (num1 < num2) {
            return num2;
        } else {
            return "Numbers are equal, " + num1;
        }
    } else {
        return "One or two Numbers are in wrong range";
    }
}

console.log(largerNumber34(0, 1));
console.log(largerNumber34(44, 1));
console.log(largerNumber34(44, 60));
console.log(largerNumber34(53, 40));
console.log(largerNumber34(55, 55));