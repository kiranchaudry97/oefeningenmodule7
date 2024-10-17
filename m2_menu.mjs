import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });


//Maak een object genaamd restaurant met eigenschappen naam (string), keuken (string), en menu (array van objecten). 
//Voeg een methode toevoegenAanMenu toe waarmee je een nieuw gerecht aan het menu kunt toevoegen.
// Elk gerecht heeft een naam en een prijs.

let restaurant = {
    naam: "Biryani House",
    keuken: "Indian",
    menu: [], 

    toevoegenAanMenu: function(gerechtNaam, prijs) {
        let nieuwGerecht = {
            naam: gerechtNaam,
            prijs: prijs
        };
        this.menu.push(nieuwGerecht); 
        console.log(`Gerecht '${gerechtNaam}' is toegevoegd aan het menu voor €${prijs}.`);
    },

    toonMenu: function() {
        if (this.menu.length === 0) {
            console.log("Het menu is momenteel leeg.");
        } else {
            console.log(`Menu van ${this.naam} (${this.keuken} keuken):`);
            this.menu.forEach(gerecht => {
                console.log(`- ${gerecht.naam}: €${gerecht.prijs}`);
            });
        }
    }
};

restaurant.toevoegenAanMenu("Biryani", 15);  
restaurant.toevoegenAanMenu("Tandoori Chicken", 18);  

restaurant.toonMenu();










process.exit();