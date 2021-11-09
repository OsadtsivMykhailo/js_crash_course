// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words 
// reversed (Just like the name of this Kata). Strings passed in will consist of
//  only letters and spaces. Spaces will be included only when more than one word 
//  is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
//  spinWords( "This is a test") => returns "This is a test" 
//  spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
    let input = string.split(" ");
    for (let i = 0; i < input.length; i++) {
        if (input[i].length >= 5) {
            input[i] = reverseString (input[i]);
        }
    }
    let res = "";
    for (let i = 0; i < input.length; i++) {
        res += input[i];
        if (input.length - i > 1) {
            res += " ";
        }
    }
    return res;   
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(spinWords( "Hey fellow warriors" ));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));

