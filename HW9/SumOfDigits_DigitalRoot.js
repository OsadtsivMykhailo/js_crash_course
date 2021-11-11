// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    // ...
    let strNum = "" + n;
    let arrNum = [];
    arrNum = strNum.split("");
    let sum1 = 0;
    for (let i = 0; i < arrNum.length; i++) {
      sum1 = sum1 + arrNum[i] / 1;
    }
    //console.log(sum1);
    while (sum1 > 9) {
      strNum = "" + sum1;
      arrNum = strNum.split("");
      sum1 = 0;
      for (let i = 0; i < arrNum.length; i++) {
        sum1 = sum1 + arrNum[i] / 1;
      }
    }
    return sum1;
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));