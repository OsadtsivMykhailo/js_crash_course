//30. Write a JavaScript program to check whether a string "Script"
// presents at 5th (index 4) position in a given string,
// if "Script" presents in the string return the string without "Script"
// otherwise return the original one.
function checkAndEditStr30 (str) {
    if (str.indexOf("Script") == 4) {
        return str.slice(0, 4) + str.slice(10);
    } else {
        return str;
    }
}

console.log(checkAndEditStr30("JavaScriptIsCool"));
console.log(checkAndEditStr30("AdrenalineScript"));
