class Ninja {
    constructor (name, tai, nin, gen) {
        this.name = name;
        this.tai = tai;
        this.nin = nin;
        this.gen = gen;
        this.lvl = 0;
        this.hp = 100 + tai * (lvl + 1) + nin * 0.5 * (lvl + 1);
        this.chakra = 100 + tai * (lvl + 1) + nin * 3 * (lvl + 1) + gen * (lvl + 1);
        this.freeParamPoints = 0;
    }
}

class UchihaNinja extends Ninja {
    constructor(){
    this.surname = "Uchiha";
    this.kekkegenkai = "sharingan";
    }
}

const lvlUpExpArray = [20, 100, 500, 2500, 12500, 60000, 300000,
                     1200000, 12000000, 10 ** 8, 10 ** 9];

const Sasuke = new UchihaNinja ("Sasuke", )