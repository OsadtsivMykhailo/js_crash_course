//22. Write a JavaScript program to remove a character at the specified position
// of a given string and return the new string.
function remCh22 (pos, str) {
    if (pos >= 0) {
        return str.slice(0, pos) + str.slice(pos +1);
    } else {
        console.log("Position must be not Negative number!");
        return str;
    }
}

console.log(remCh22(0, "Java"));
console.log(remCh22(1, "Java"));
console.log(remCh22(2, "Java"));
console.log(remCh22(3, "Java"));
console.log(remCh22(-1, "Java"));
console.log(remCh22(4, "Java"));
console.log(remCh22(7, "Java"));
console.log(remCh22(3.33, "Java"));
console.log(remCh22(2.77, "Java"));
