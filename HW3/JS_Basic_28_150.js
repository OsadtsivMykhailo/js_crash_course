//28. Write a JavaScript program to check whether two given integer values
// are in the range 50..99 (inclusive).
// Return true if either of them are in the said range.
function check28 (int1, int2) {
    if (Number.isInteger(int1) && Number.isInteger(int2)) {
        if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
            return true;
        } else {
            return false;
        }
    } else {
        return "One or both inputs aren't Integer values";
    }
}

console.log(check28(0, 1));
console.log(check28(55, 1));
console.log(check28(0, 99));
console.log(check28(66, 55));
console.log(check28(66.6, 44,44));
console.log(check28("55", 1));