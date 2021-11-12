// The maximum sum subarray problem consists in finding the maximum sum of a contiguous 
// subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is 
// the sum of the whole array. If the list is made up of only negative numbers, 
// return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array 
// is also a valid sublist/subarray.

var maxSequence = function(arr){
    // ...
    console.log({arr});
    if (arr.length == 0) {
      return 0;
    }
    if (arr.length == 1) {
      return arr[0];
    }
    let max = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length + 1; j++) {
        
        console.log({i, j});
        let arr1 = arr.slice(i, j);
        console.log (arr1);
        let sum = arr1.reduce(myFunction);
        console.log(sum);
        if (sum > max) max = sum;
    
      }
    }
    return max;
  }
  
function myFunction(total, value, index, array) {
    return total + value;
}

console.log(maxSequence([0, 1, 2, -5, 4]));

//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

