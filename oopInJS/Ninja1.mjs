import { getRandomIntInclusive } from "./main.mjs";
export class Ninja1 {
    #name;
    #tai;
    #nin;
    #gen;
    #maxHp;
    #maxChakra;
    #curHp;
    #curChakra;
    #enemy;
    #isStunned;

    constructor (name, tai, nin, gen) {
        this.#name = name;
        this.#tai = tai;
        this.#nin = nin;
        this.#gen = gen;
        this.#maxHp = 100 + tai + (nin * 0.5);
        this.#maxChakra = 100 + tai + (nin * 3) + gen;
        this.#curHp = this.#maxHp;
        this.#curChakra = this.#maxChakra;
        this.#enemy = null;
        this.#isStunned = 0;
    }

    increaseTai(x = 1) { this.#tai += x; }
    decreaseTai(x = 1) { this.#tai -= x; }
    increaseTai(x = 1) { this.#nin += x; }
    decreaseTai(x = 1) { this.#nin -= x; }
    increaseTai(x = 1) { this.#gen += x; }
    decreaseTai(x = 1) { this.#gen -= x; }
    setMaxHp(x) { this.#maxHp = x; }
    setcurHp(x) { this.#curHp = x; }
    setMaxChakra(x) { this.#maxChakra = x; }
    setCurChakra(x) { this.#curChakra = x; }
    setEnemy(x) { this.#enemy = x; }
    useTaiAttack () {
        let damage = 20 + this.#tai - this.#enemy.#tai
        this.#enemy.setcurHp(this.#enemy.#curHp - damage);
    }
    useNinAttack () {
        let damage = 30 + this.#tai - this.#enemy.#tai
        this.setCurChakra(this.#curChakra - 25);
        this.#enemy.setcurHp(this.#enemy.#curHp - damage);
    }
    reciveStun(x = 1) { this.#isStunned += x; }
    decreaseStun(x = 1) { this.#isStunned -= x; }
    useGenAttack () {
        let damage = 10 + this.#gen - this.#enemy.#gen
        this.setCurChakra(this.#curChakra - 15);
        this.#enemy.setcurHp(this.#enemy.#curHp - damage);
        this.#enemy.reciveStun();
    }
    useAttack () {
        if (this.#curChakra >=25) {
           let i =  getRandomIntInclusive (1, 3);
          switch (i) {
              case 1 :
                  this.useTaiAttack();
                  break;
              case 2 :
                  this.useNinAttack();
                  break;
              case 3 :
                  this.useGenAttack();
                  break;
          } 
        } else if (this.#curChakra >=15) {
            let i =  getRandomIntInclusive (1, 2);
            switch (i) {
                case 1 :
                    this.useTaiAttack();
                    break;
                case 2 :
                    this.useGenAttack();
                    break;
            }
        } else {
            this.useTaiAttack();
        }
    }
    getObj() {
        console.log(this.getName());
        console.log(this.getTai());
        console.log(this.getNin());
        console.log(this.getGen());
        console.log(this.getMaxHp());
        console.log(this.getCurHp());
        console.log(this.getMaxChakra());
        console.log(this.getCurChakra());
    }
    getName() {
        return this.#name;
    }
    getTai() {
        return this.#tai;
    }
    getNin() {
        return this.#nin;
    }
    getGen() {
        return this.#gen;
    }
    getMaxHp() {
        return this.#maxHp;
    }
    getCurHp() {
        return this.#curHp;
    }
    getMaxChakra() {
        return this.#maxChakra;
    }
    getCurChakra() {
        return this.#curChakra;
    }
    getIsStunned() {
        return this.#isStunned;
    }
    refresh() {
        this.#maxHp = 100 + this.#tai + (this.#nin * 0.5)
        this.#maxChakra = 100 + this.#tai + (this.#nin * 3) + this.#gen;
        this.#curHp = this.getMaxHp();
        this.#curChakra = this.getMaxChakra();
    }
}