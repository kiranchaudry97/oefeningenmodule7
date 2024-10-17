import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });


//Creëer een object genaamd autoGarage met eigenschappen naam (string) en autos (array van objecten, 
//waar elk object een auto vertegenwoordigt met eigenschappen zoals merk en bouwjaar).
// Voeg een methode vervangAuto toe waarmee je een oude auto kunt vervangen door een nieuwe.


let autoGarage = {
    naam: "De Luxe AutoGarage",
    autos: [
        { merk: "Toyota", bouwjaar: 2015 },
        { merk: "Ford", bouwjaar: 2018 },
        { merk: "BMW", bouwjaar: 2020 }
    ],

    vervangAuto: function(oudeAutoMerk, nieuweAutoMerk, nieuwBouwjaar) {
        let autoIndex = this.autos.findIndex(auto => auto.merk === oudeAutoMerk);
        
        if (autoIndex !== -1) {
            this.autos[autoIndex] = { merk: nieuweAutoMerk, bouwjaar: nieuwBouwjaar };
            console.log(`De auto '${oudeAutoMerk}' is vervangen door een nieuwe '${nieuweAutoMerk}' (${nieuwBouwjaar}).`);
        } else {
            console.log(`Auto met merk '${oudeAutoMerk}' niet gevonden.`);
        }
    },

    toonAutos: function() {
        console.log(`Auto's in de ${this.naam}:`);
        this.autos.forEach(auto => {
            console.log(`- Merk: ${auto.merk}, Bouwjaar: ${auto.bouwjaar}`);
        });
    }
};

autoGarage.vervangAuto("Toyota", "Tesla", 2022);    
autoGarage.vervangAuto("Ford", "Porsche", 2023);    
autoGarage.vervangAuto("BMW", "Lexus", 2021);     

autoGarage.toonAutos();














process.exit();