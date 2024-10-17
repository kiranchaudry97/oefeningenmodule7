
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

// Ontwerp een object voor de Fabienhogeschool Brussel met 
//eigenschappen naam (string), studenten (array van objecten,
// waar elk object een student vertegenwoordigt met 
//eigenschappen zoals naam, leeftijd, en vakken), en cursussen (array van strings). 
//Voeg een methode inschrijvenStudent toe waarmee je een student kunt inschrijven voor een cursus.




let fabienhogeschool = {
    naam: "Fabienhogeschool Brussel",
    studenten: [],  
    cursussen: ["Wiskunde", "Informatica", "Geschiedenis", "Biologie"],  

    inschrijvenStudent: function(studentNaam, leeftijd, vakken) {
        let nieuweStudent = {
            naam: studentNaam,
            leeftijd: leeftijd,
            vakken: vakken || []  
        };
        this.studenten.push(nieuweStudent);
        console.log(`${studentNaam} is ingeschreven aan de Fabienhogeschool.`);
    },

    inschrijvenVoorCursus: function(studentNaam, cursus) {
        let student = this.studenten.find(st => st.naam === studentNaam);

        if (!student) {
            console.log(`Student ${studentNaam} is niet gevonden.`);
            return;
        }

        if (!this.cursussen.includes(cursus)) {
            console.log(`Cursus '${cursus}' bestaat niet in het aanbod.`);
            return;
        }

        if (!student.vakken.includes(cursus)) {
            student.vakken.push(cursus);
            console.log(`${studentNaam} is ingeschreven voor de cursus '${cursus}'.`);
        } else {
            console.log(`${studentNaam} is al ingeschreven voor de cursus '${cursus}'.`);
        }
    },

    toonStudenten: function() {
        if (this.studenten.length === 0) {
            console.log("Er zijn momenteel geen studenten ingeschreven.");
        } else {
            console.log(`Studenten aan de ${this.naam}:`);
            this.studenten.forEach(student => {
                console.log(`- ${student.naam}, Leeftijd: ${student.leeftijd}, Vakken: ${student.vakken.join(", ") || "Geen vakken"}`);
            });
        }
    }
};


fabienhogeschool.inschrijvenStudent("Alice", 21);
fabienhogeschool.inschrijvenStudent("Bob", 23, ["Wiskunde"]);

fabienhogeschool.inschrijvenVoorCursus("Alice", "Informatica");
fabienhogeschool.inschrijvenVoorCursus("Bob", "Geschiedenis");
fabienhogeschool.inschrijvenVoorCursus("Alice", "Wiskunde");
fabienhogeschool.inschrijvenVoorCursus("Alice", "Informatica");  

fabienhogeschool.toonStudenten();

process.exit();
