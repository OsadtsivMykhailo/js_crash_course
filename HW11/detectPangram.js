// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, 
// False if not. Ignore numbers and punctuation.
function isPangram(string){
    //...
    const aZ = ["a", "b", "c", 'd', "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", 'u', 'v', 'w', 'x', 'y', 'z'];
    let input = string.toLowerCase();
    let res = true;
    aZ.forEach(function (value, index) {
      if (input.indexOf(value) == -1) {
        res = false; 
      }
    })
    return res;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));