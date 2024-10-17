

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });





let semester1 = {
    docent: 'Robin',
    vak: 'programming fundamentals',
    sem: function () {

        console.log( `de docent is '${this.docent}' geeft de les voor deze vak ${this.vak}.`);
    }  
};

let semester2 = {
    docent: 'Geert',
    vak: ' It essentaisl',
    sem: function () {

        console.log( `de docent is '${this.docent}' geeft de les voor deze vak${this.vak}.`);
    }  
};

let semester3 = {
    docent: 'Evert',
    vak: ' process project flow',
    sem: function () {

        console.log( `de docent is '${this.docent}' geeft de les voor deze vak${this.vak}.`);
    }  
};


let semester4 = {
    docent: 'Robin',
    vak: ' programming advanced',
    sem: function () {

        console.log( `de docent is '${this.docent}' geeft de les voor deze vak${this.vak}.`);
    }  
};

semester1.sem();
semester2.sem();
semester3.sem();
semester4.sem();




process.exit();

