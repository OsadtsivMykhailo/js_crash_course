class Ninja {
    constructor (name, tai, nin, gen) {
        this.name = name;
        this.tai = tai;
        this.nin = nin;
        this.gen = gen;
        this.lvl = 0;
        this.hp = 100 + tai * (this.lvl + 1) + nin * 0.5 * (this.lvl + 1);
        this.chakra = 100 + tai * (this.lvl + 1) + nin * 3 * (this.lvl + 1) + gen * (this.lvl + 1);
        this.freeParamPoints = 0;
    }
}

class UchihaNinja extends Ninja {
    constructor(name, tai, nin, gen){
    super(name, tai, nin, gen);
    this.surname = "Uchiha";
    this.kekkegenkai = "sharingan";
    }
}

const lvlUpExpArray = [20, 100, 500, 2500, 12500, 60000, 300000,
                     1200000, 12000000, 10 ** 8, 10 ** 9];

const Sasuke = new UchihaNinja ("Sasuke", 3, 5, 4);
//console.log(Sasuke);

const Sakura = new Ninja ("Sakura", 2, 1, 1);
//console.log(Sakura);

class UzumakiNinja extends Ninja {
    constructor(name, tai, nin, gen){
    super(name, tai, nin, gen);
    this.chakra *= 1.25;
    this.surname = "Uzumaki";
    this.kekkegenkai = "DenseChakra";
    }
}

const Naruto = new UzumakiNinja ("Naruto", 3, 4, 3);
//console.log(Naruto);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const badNinjas = [10];
for (let i = 1; i <11; i++) {
    badNinjas[i] = new Ninja (`抜け忍 ${i}`, getRandomIntInclusive (1, 2),
     getRandomIntInclusive (1, 2), getRandomIntInclusive (1, 2));
    //console.log(badNinjas);
}

let op = 0;
let MainCharackter = {};
let snd = new Audio("Sweet16.mp3");
function func() {
    let image = "";
    switch (op) {
      case 1:
        Object.assign(MainCharackter, Naruto);
        image = "naruto.jpg";
        break;
      case 2:
        Object.assign(MainCharackter, Sasuke);
        image = "sasuke.png";
        break;
      case 3:
        Object.assign(MainCharackter, Sakura);
        image = "sakura.png";
        break;
    }
    document.getElementById("result").innerHTML = "You will be playing as " 
    + MainCharackter.name;
    document.getElementById("firstImage").src = image;
    snd.play();
    document.getElementById("link").hidden = false;
    const MyJSON = JSON.stringify(MainCharackter);
    window.localStorage.setItem("mainCh", MyJSON);
    //console.log(window.localStorage.getItem("mainCh"));
  }
  