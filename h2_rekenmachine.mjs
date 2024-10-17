
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });


//Maak een object genaamd rekenmachine met methoden voor optellen, aftrekken, vermenigvuldigen en delen.
// Elk van deze methoden moet twee parameters accepteren en het resultaat teruggeven.

let rekenmachine = {
    
    optellen: function(a, b) {
        return a + b;
    },

    aftrekken: function(a, b) {
        return a - b;
    },

    vermenigvuldigen: function(a, b) {
        return a * b;
    },

    delen: function(a, b) {
        if (b === 0) {
            return "Fout: Delen door nul is niet toegestaan.";
        } else {
            return a / b;
        }
    }
};

console.log("Optellen: 5 + 3 =", rekenmachine.optellen(5, 3));           
console.log("Aftrekken: 10 - 4 =", rekenmachine.aftrekken(10, 4));       
console.log("Vermenigvuldigen: 6 * 7 =", rekenmachine.vermenigvuldigen(6, 7)); 
console.log("Delen: 20 / 4 =", rekenmachine.delen(20, 4));               
console.log("Delen door nul: 20 / 0 =", rekenmachine.delen(20, 0));      

process.exit();