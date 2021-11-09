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

    constructor (name, tai, nin, gen) {
        this.#name = name;
        this.#tai = tai;
        this.#nin = nin;
        this.#gen = gen;
        this.#maxHp = 100 + tai + (nin * 0.5);
        this.#maxChakra = 100 + tai + (nin * 3) + gen;
        this.#curHp = this.maxHp;
        this.#curChakra = this.maxChakra;
        this.#enemy = null;
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
    refresh() {
        this.#maxHp = 100 + this.tai + (this.nin * 0.5)
        this.#maxChakra = 100 + this.tai + (this.nin * 3) + this.gen;
        this.#curHp = this.maxHp;
        this.#curChakra = this.maxChakra;
    }
}