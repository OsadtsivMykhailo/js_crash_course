//36. Write a JavaScript program to check whether the last digit
// of the three given positive integers is same.

function check36 (int1, int2, int3) {
    let str1 = int1.toString();
    let str2 = int2.toString();
    let str3 = int3.toString();
    if ((str1.charAt(str1.length - 1) == str2.charAt(str2.length - 1)) 
    && (str1.charAt(str1.length - 1) == str3.charAt(str3.length - 1))) {
        return true;
    } else {
        return false;
    }
}

console.log(check36(3, 33, 333));
console.log(check36(23, 33, 4333));
console.log(check36(1, 33, 333));
console.log(check36(3, 34, 333));
console.log(check36(3, 33, 336));