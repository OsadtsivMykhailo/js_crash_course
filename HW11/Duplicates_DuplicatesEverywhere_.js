// You are given a table, in which every key is a stringified number, 
// and each corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each character 
// should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
// Rules
// Whenever two keys share the same character, they should be compared numerically, 
// and the larger key will keep that character. That's why in the example above the array 
// under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.
// Example 1
// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }
// Example 2
// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }
// Example 3
// input = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// }

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

function removeDuplicateIds (obj) {
    let objValues = Object.values(obj);
    let objKeys = Object.keys(obj);
    //console.log(objValues);
    for (let i = objValues.length - 1; i >=0; i--) {
     // console.log(objValues[i]);
      for (let j = 0; j < objValues[i].length; j++) {
        if (objValues[i].lastIndexOf(objValues[i][j]) != j) {
          objValues[i].splice(objValues[i].lastIndexOf(objValues[i][j]), 1);
          j--;
        }
        for (let k = i - 1; k >=0; k--) {
          if (objValues[k].indexOf(objValues[i][j]) != -1) {
            objValues[k].splice(objValues[k].indexOf(objValues[i][j]), 1);
            k++;
          }
        }
      }
    }
    let resObj = {};
    for (let i = 0; i < objValues.length; i++) {
      resObj[objKeys[i]] = objValues[i];
    }
    return resObj;
}

const obj = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
  };
const result = removeDuplicateIds(obj);
  
const obj1 = {
    "1": ["C", "F", "G"],
    "2": ["A", "B", "C"],
    "3": ["A", "B", "D"],
};
const result1 = removeDuplicateIds(obj1);
  
const obj2 = {
    "1": ["A"],
    "2": ["A"],
    "3": ["A"],
};
const result2 = removeDuplicateIds(obj2);
          
const obj3 = {
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"],
};
const result3 = removeDuplicateIds(obj3);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);