//25. Write a JavaScript program to check whether a given positive number
// is a multiple of 3 or a multiple of 7.
function check25 (givenNumber) {
    if (multipleCheck(givenNumber, 3) && !multipleCheck(givenNumber, 7)) {
        console.log(givenNumber + " is multiple of 3");
    } else if (multipleCheck(givenNumber, 7) && !multipleCheck(givenNumber, 3)) {
        console.log(givenNumber + " is multiple of 7");
    } else if (multipleCheck(givenNumber, 3) && multipleCheck(givenNumber, 7)) {
        console.log(givenNumber + " is multiple of 3 & 7");
    } else {
        console.log(givenNumber + " isn't multiple of 3 or 7");
    }
}
function multipleCheck (givenNumber, multiplier) {
    if (givenNumber % multiplier == 0) {
        return true;
    }
        else {
            return false;
        }
}

for (let i = 0; i < 22; i++) {
    check25(i);
}