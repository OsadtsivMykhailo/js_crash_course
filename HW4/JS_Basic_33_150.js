//33. Write a JavaScript program to check whether two numbers are in range 40..60
// or in the range 70..100 inclusive.
function check33 (num1, num2) {
    if(((num1 >= 40 && num1 <= 60) || ((num1 >= 70 && num1 <= 100))) && 
    ((num2 >= 40 && num2 <= 60) || ((num2 >= 70 && num2 <= 100)))) {
        return true;
    } else {
        return false;
    }
}

console.log(check33(0, 33));
console.log(check33(45, 83));
console.log(check33(44, 44));
console.log(check33(88, 83));
console.log(check33(0, 100));
console.log(check33(44, 33));