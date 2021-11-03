//24. Write a JavaScript program to create a new string from a given string
// with the first character of the given string added at the front and back.
function newStr24 (str) {
    str = str.toString();
    if (str.length>=1) {
        return str.charAt(0) + str + str.charAt(0);
    }
}

console.log(newStr24(""));
console.log(newStr24("1"));
console.log(newStr24(2));
console.log(newStr24("sdasd"));