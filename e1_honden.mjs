
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

//Maak enkele objecten met de naam hond1, hond2, ...
// met elk de eigenschappen naam (string), leeftijd (getal) en isSpeels (boolean).
// Zorg dat al deze honden in een array terecht komen.


let hond1 = {
    naam: "Joske",
    leeftijd: 5,
    ispeels: true
};

let hond2 = {
    naam: "Filip",
    leeftijd: 6,
    ispeels: true
};

function honden(naam, leeftijd, ispeels = true) {
    return {
        naam: naam,
        leeftijd: leeftijd,
        ispeels: ispeels,
        toString: function () {
            return `Hallo, mijn naam is ${this.naam}. Ik ben ${this.leeftijd} jaar oud en ik ben ${this.ispeels ? "speels" : "niet speels"}.`;
        }
    };
}

let hond3 = honden("Bella", 3, false);
let hond4 = honden("Max", 7);

let honden = [hond1, hond2, hond3, hond4];

honden.forEach(hond => {
    console.log(hond.toString());
});

userInput.close();
