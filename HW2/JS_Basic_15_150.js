//15. Write a JavaScript program to get the difference between a given number and 13,
// if the number is greater than 13 return double the absolute difference.
function diff15 (givenNumber) {
    if (givenNumber > 13) return (givenNumber - 13) * 2;
    else return 13 - givenNumber;
}
console.log(diff15(-11));
console.log(diff15(13));
console.log(diff15(15));