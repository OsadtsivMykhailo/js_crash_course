//Write a JavaScript program to check whether a string starts with 'Java'
// and false otherwise.
function strCheck27 (str) {
    if (str.indexOf("Java") == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(strCheck27("Java better than JavaScript")); 
console.log(strCheck27("JS better than Java"));