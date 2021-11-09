import { Ninja1 } from "./Ninja1.mjs";
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const ninjas = [8];
for (let i = 0; i < 8; i++) {
    ninjas[i] = new Ninja1 (`Ninja #${i}`, getRandomIntInclusive (3, 5),
    getRandomIntInclusive (3, 5), getRandomIntInclusive (3, 5));
}

function fight (ninja1, ninja2) {
    ninja1.setEnemy(ninja2);
    ninja2.setEnemy(ninja1);
    ninja1.useTaiAttack();
}

fight (ninjas[0], ninjas[1]);
ninjas[0].getObj();
console.log("-----------------");
ninjas[1].getObj();