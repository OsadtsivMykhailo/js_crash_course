// in this kata you have to correctly return who is the "survivor", 
// ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are
// eliminated in steps of k elements, like this:

// josephus_survivor(7,3) => means 7 people in a circle;
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!

function josephusSurvivor(n,k){
    //your code here
    console.log({n, k});
    const arr = [];
    let counter = 0;
    for (let i = 0; i < n; i++) {
      arr[i] = i + 1;
    }
    console.log(arr);
    while (arr.length > 1) {
      counter = (counter + k - 1) % arr.length;
      arr.splice (counter, 1);
      console.log(arr);
    }
    return arr[0];
  }

  josephusSurvivor(7,3);
  josephusSurvivor(11,5);
  josephusSurvivor(3,5);