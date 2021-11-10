// Write a function, persistence, that takes in a positive parameter num and returns
// its multiplicative persistence, which is the number of times you must multiply 
// the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
                 
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
                  
//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
   let str = "" + num;
   let arr = str.split("");
   //console.log(arr);
   if (arr.length == 1) {
     return 0;
   } else {
     let res = 1;
     let mult = 1;
     for (let i = 0; i < arr.length; i++) {
       mult *= arr[i];
     }
     while (mult / 10 >= 1) {
       res++;
       let str = "" + mult;
       arr = str.split("");
       mult = 1;
         for (let i = 0; i < arr.length; i++) {
           mult *= arr[i];
         }
       }
     return res;
   } 
 }

 console.log (persistence(39));
 console.log (persistence(999));
 console.log (persistence(4));
