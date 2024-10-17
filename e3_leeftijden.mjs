import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

//Maak twee objecten, persoon1 en persoon2, 
//elk met eigenschappen naam (string) en leeftijd (getal). 
//Schrijf een functie genaamd vergelijkLeeftijd die de leeftijden van de twee personen vergelijkt en
// zegt wie ouder is.



let persoon1 = {
    naam: "Kiran",
    leeftijd: 27,
};

let persoon2 = {
    naam: "Lina",
    leeftijd: 21,
};

function vergelijkLeeftijd(persoon1, persoon2) {
    if (persoon1.leeftijd > persoon2.leeftijd) {
        console.log(`${persoon1.naam} is ouder dan ${persoon2.naam}.`);
    } else if (persoon1.leeftijd < persoon2.leeftijd) {
        console.log(`${persoon2.naam} is ouder dan ${persoon1.naam}.`);
    } else {
        console.log(`${persoon1.naam} en ${persoon2.naam} zijn even oud.`);
    }
}

vergelijkLeeftijd(persoon1, persoon2);

process.exit();
