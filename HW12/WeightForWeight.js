// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 
// will come before 99.

// Given a string with the weights of FFC members in normal order can you give this 
// string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings 
// (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than 
// a unique whitespace between two consecutive numbers

function orderWeight(strng) {
    let arr = [[],[],[]];
    arr[0] = strng.split(" ");
    let length = arr[0].length;
    for (let i = 0; i < length; i++) {
      arr[1][i] = sumOfDigits(arr[0][i]);
    }
    for (let j = 0; j < length; j++){
      let min = [arr[0][j], arr[1][j]];
      let temp0 = j;
      for (let i = j+1; i < length; i++) {
        if (arr[1][i] < min[1]) {
           min = [arr[0][i], arr[1][i]];
           temp0 = i;
        } else if (arr[1][i] == min[1]) {
          if (arr[0][i] < min[0]) {
             min = [arr[0][i], arr[1][i]];
             temp0 = i;
          }
        }
      }
      arr[2][j] = min[0];
      let tmp1 = arr[0][j];
      arr[0][j] = arr[0][temp0];
      arr[0][temp0] = tmp1;
      let tmp2 = arr[1][j];
      arr[1][j] = arr[1][temp0];
      arr[1][temp0] = tmp2;
    }
    let res = "";
    res = arr[2].join(" ");
    return res;
  }
    
function sumOfDigits (str) {
    let num = str / 1;
    let sum = 0;
    while (num >=1) {
      sum+= num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
}

console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));