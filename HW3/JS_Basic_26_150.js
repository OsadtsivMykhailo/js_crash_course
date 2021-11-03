//26. Write a JavaScript program to create a new string from a given string
// taking the last 3 characters and added at both the front and back. 
//The string length must be 3 or more.
function newStr26 (str) {
    if (str.length >= 3) {
        return str.slice(str.length - 3) + str + str.slice(str.length - 3);
    } else {
        return "Error, The string length must be 3 or more";
    }
}

console.log(newStr26(""));
console.log(newStr26("1"));
console.log(newStr26(111232));
console.log(newStr26("yogurt"));