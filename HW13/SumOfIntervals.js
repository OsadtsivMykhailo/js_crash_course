// Write a function called sumIntervals/sum_intervals() that accepts an array of 
// intervals, and returns the sum of all the interval lengths. Overlapping intervals 
// should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. 
// The first value of the interval will always be less than the second value. 
// Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, 
//we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [1,2],
//    [6, 10],
//    [11, 15]
// ] ); // => 9

// sumIntervals( [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ] ); // => 7

// sumIntervals( [
//    [1,5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ); // => 19

function sumIntervals(intervals){
    let min = Infinity;
    let max = -Infinity;
    let res = 0;
    for (let i = 0; i < intervals.length; i++) {
      for (let j = 0; j < intervals[i].length; j++) {
        if (min > intervals[i][j]) min = intervals[i][j];
        if (max < intervals[i][j]) max = intervals[i][j];
      }
    }
  
    const obj = {}
    for (let i = min; i <= max; i++) {
      obj[i] = true;
    }
    
    for (let i = 0; i < intervals.length; i++) {
      for (let j = intervals[i][0]; j < intervals[i][1]; j++) {
        if (obj[j]) {
          res++;
          obj[j] = false;
        }
      }
    }
    return res;
}

console.log(sumIntervals ([[1,5]]));
console.log(sumIntervals ([[1,5],[6,10]]));
console.log(sumIntervals ([[1,5],[1,5]]));
console.log(sumIntervals ([[1,4],[7, 10],[3, 5]]));