//35. Write a program to check whether a specified character exists 
//within the 2nd to 4th position in a given string.
function check35(char, str) {
    let str2 = str.slice(1, 4);
    if (str2.indexOf(char) != -1) {
        return true;
    } else {
        return false;
    }
}

console.log(check35("a", "aaaaaa"));
console.log(check35("a", "a"));
console.log(check35("a", "aa"));
console.log(check35("a", "bbbbb"));
console.log(check35("a", "bbab"));
console.log(check35("a", "nbbabbb"));