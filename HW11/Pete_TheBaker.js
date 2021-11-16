// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. Can you help him to find out, 
// how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available 
// ingredients (also an object) and returns the maximum number of cakes Pete can 
// bake (integer). For simplicity there are no units for the amounts 
// (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not 
// present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
// function cakes(recipe, available) {
//     let res = Infinity;
//     let recipeKeysValues = Object.entries(recipe);
//     let availableKeysValues = Object.entries(available);
//     let availableKeys = Object.keys(available);
//     if (Object.keys(available).length == 0) {
//       res = 0;
//     }
//     for (let i = 0; i < recipeKeysValues.length; i++) {
//         if (availableKeys.indexOf(recipeKeysValues[i][0]) == -1) {
//             res = 0;
//         }
//         for (let j = 0; j < availableKeysValues.length; j++) {
//             if (recipeKeysValues[i][0] == availableKeysValues[j][0]) {
//                 if (Math.floor(availableKeysValues[j][1] / recipeKeysValues[i][1]) < res) {
//                     res = Math.floor(availableKeysValues[j][1] / recipeKeysValues[i][1]);
//                 }
//             }
//         }
//     }
//     return res;
// }

function cakes(obj1, obj2) {
    const result = {};
    let canIMake = true;
    let max = 0;
    Object.keys(obj1).forEach(ingredient => {
        if (obj2[ingredient] === 0 || obj2[ingredient] === null || obj2[ingredient] === undefined) {
            result[ingredient] = 0;
            canIMake = false;
        } else if(obj2[ingredient]) {
            result[ingredient] = parseInt(obj2[ingredient]/obj1[ingredient]);
        }
    });
    if (canIMake) {
        max = Math.min(...Object.values(result));
    } else max = 0;
    return max;
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, 
    {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, 
    {sugar: 500, flour: 2000, milk: 2000}));