import { Ninja1 } from "./Ninja1.mjs";
export function getRandomIntInclusive(min, max) {
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
    let i = getRandomIntInclusive(0, 1);
    while (true) {
      if (i == 0) {
        i = 1;  
        if (ninja1.getIsStunned() == 0) {
            ninja1.useAttack();
        } else {
            ninja1.decreaseStun();
          }
        if (ninja2.getCurHp() <= 0) return ninja1;
      } else if (i == 1) {
            i = 0;  
            if (ninja2.getIsStunned() == 0) {
                ninja2.useAttack();
            } else {
                ninja2.decreaseStun();
            }
            if (ninja1.getCurHp() <= 0) return ninja2;
        }
    //   console.log ("start of turn")
    //   ninja1.getObj();
    //   console.log ("----------")
    //   ninja2.getObj();
    //   console.log ("end of turn")
    }
}

let winner = fight (ninjas[0], ninjas[1]);
winner.getObj();
ninjas[0].refresh();
ninjas[1].refresh();