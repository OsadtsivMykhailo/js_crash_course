//23. Write a JavaScript program to create a new string from a given string 
//changing the position of first and last characters. The string length must be 
//greater than or equal to 1.
function changeStr23 (str) {
    if (str.length == 1) {
        return str;
    } else if (str.length > 1) {
        return str.charAt(str.length - 1) 
        + str.slice(1, str.length - 1) 
        + str.charAt(0);
    } else {
        return "Error, The string length must be greater than or equal to 1"
    }
}

console.log(changeStr23(""));
console.log(changeStr23("b"));
console.log(changeStr23("bibica"));