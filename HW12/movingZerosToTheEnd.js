// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
    // TODO: Program me
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr.splice(i, 1);
        counter++;
        i--;
      }
    }
    for (let i = 0; i < counter; i++) {
      arr.push(0);
    }
    return arr;
  }
  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));