import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

//Bouw een object genaamd bankrekening met eigenschappen rekeningnummer (string), saldo (getal), 
//en eigenaar (string). Voeg een methode toonSaldo toe om het huidige saldo weer te geven.
// Voeg een methode overschrijving toe waarmee je geld aan een andere bankrekening kan storten.
// Dit zou als volgt kunnen gebruikt worden:

let bankrekening = {
    rekeningnummer: "123456",
    saldo: 100,
    eigenaar: "Kiran",
    
    toonSaldo: function() {
        console.log(`Er staat momenteel €${this.saldo} op de rekening met nummer ${this.rekeningnummer}`);
    },
    
    overschrijving: function(ontvangendeRekening, bedrag) {
        if (bedrag > this.saldo) {
            console.log("Overschrijving mislukt: onvoldoende saldo.");
        } else {
            this.saldo -= bedrag;
            ontvangendeRekening.saldo += bedrag;
            console.log(`Er is €${bedrag} overgeschreven naar rekening ${ontvangendeRekening.rekeningnummer}`);
        }
    }
};

let rekening2 = {
    rekeningnummer: "987654",
    saldo: 20,
    eigenaar: "Lina",

    toonSaldo: function() {
        console.log(`Er staat momenteel €${this.saldo} op de rekening met nummer ${this.rekeningnummer}`);
    }
};

bankrekening.toonSaldo(); 
rekening2.toonSaldo();     

bankrekening.overschrijving(rekening2, 50);  
bankrekening.toonSaldo();  
rekening2.toonSaldo();    
process.exit();