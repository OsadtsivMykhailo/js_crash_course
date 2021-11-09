const stringsArray = [
      'one-test', 'cat', 'parrot',
      'banana', 'test-dog', 'dog'
     ]

function filterStringsArray(array) {
    for (let i = 0; i < array.length; i++) {
     if (array[i].indexOf("test") != -1) {
      array.splice(i, 1);
     }  
    }
    return array.sort();
}

console.log(filterStringsArray(stringsArray));

const arrayItems = [
      { a: 1, b: 3 },
      { a: 3, b: 3 },
      { a: 6, b: 3 },
      { a: 10, b: 10 },
      { a: 41, b: 1 },
      { a: 0, b: 4 }
    ];
function filterAndExtendArrayItems(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].a > 5) {
        array[i].sum = array[i].a + array[i].b;
        }
    }
    return array;
}

console.log(filterAndExtendArrayItems(arrayItems));

// Task 5 - merge arrays and remove duplicates
const arNum = [1, 2, 3, 4, 5, 6];
const arNum2 = [15, 6, 3, 20, 11];
function mergeArraysWithoutDuplicates(array1, array2) {
    const res = array1.concat(array2);
    res.sort();
    for (let i = 0; i < res.length - 1; i++) {
      if (res[i] == res[i + 1]) {
        res.splice(i, 1);
        i--;
      }
    }
    return res;
}

console.log(mergeArraysWithoutDuplicates(arNum, arNum2))