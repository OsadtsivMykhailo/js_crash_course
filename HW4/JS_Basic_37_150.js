//37. Write a JavaScript program to create new string
// with first 3 characters are in lower case from a given string.
// If the string length is less than 3 convert all the characters in upper case.
function newStr37 (str) {
    if (str.length < 3) {
        return str.toUpperCase();
      }
      front_part = (str.substring(0, 3)).toLowerCase();
      back_part = str.substring(3, str.length);  
      return front_part + back_part;
}

console.log(newStr37("PyTHON"));
console.log(newStr37("Py"));
console.log(newStr37("JAVAScript"));