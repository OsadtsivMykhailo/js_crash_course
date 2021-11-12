//1. Write a JavaScript program to compare two objects to determine
// if the first one contains equivalent property values to the second one.

function compare (obj1 = {}, obj2 = {}) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
// return _.isEqual(obj1, obj2);
}

console.log(compare({a : 2}, {a : 2}));
console.log(compare({a : 2, b : 3}, {a : 2}));
console.log(compare({}, {a : 2}));
console.log(compare({b : 2}, {a : 2}));
console.log(compare({a : 3}, {a : 2}));