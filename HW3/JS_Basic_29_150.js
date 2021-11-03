//29. Write a JavaScript program to check whether three given integer values
// are in the range 50..99 (inclusive). 
//Return true if one or more of them are in the said range.
function check28 (int1, int2, int3) {
    if (Number.isInteger(int1) && Number.isInteger(int2) && Number.isInteger(int3)) {
        if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99) || (int3 >= 50 && int3 <= 99)) {
            return true;
        } else {
            return false;
        }
    } else {
        return "One or more inputs aren't Integer values";
    }
}

console.log(check28(0, 1, 5));
console.log(check28(55, 1, 5));
console.log(check28(0, 99, 5));
console.log(check28(66, 55, 5));
console.log(check28(66.6, 44,44, 5));
console.log(check28("55", 1, 5));