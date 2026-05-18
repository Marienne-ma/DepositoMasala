

// //ESERCIZIO 1

// const prompt = require("prompt-sync")();

// let pasta = prompt("Scegli un tipo di pasta inserendo un numero e clicca invio: \n1 LINGUINE;\n2 SPAGHETTI; \n3 PENNE \n");

// let condimento = null;
// switch (pasta) {
//     case 1:
//     case "1":

//         condimento = prompt("Scegli un condimento e clicca invio: \nSCOGLIO;\n CARBONARA; \nAMATRICIANA \n");
//         break;

//     case 2:
//     case "2":
//         condimento = prompt("Scegli un condimento e clicca invio: \nAMATRICIANA;\nCARBONARA; \nPANNA E SALMONE \n");
//         break;
//     case 3:
//     case "3":
//         condimento = prompt("Scegli un condimento e clicca invio: \nAMATRICIANA;\nPANNA E SALMONE; \nGRICIA \n");
//         break;
//     default:
//         condimento = "nessun condimento";
//         break;

// }

// console.log("Hai scelto " + pasta + " con il seguente condimento " + condimento);







//ESERCIZIO 2


const prompt = require("prompt-sync")();
let nome_ruolo_1 = null;
let nome_ruolo_2 = null;
let nome_ruolo_3 = null;


let ruolo_1 = prompt("Scegli un ruolo inserendo un numero e clicca invio: \n1 PLAYER;\n2 MODERATOR; \n3 ADMIN \n altro numero PREDEFINITO\n");

let ruolo_2 = prompt("Scegli un ruolo inserendo un numero e clicca invio: \n1 PLAYER;\n2 MODERATOR; \n3 ADMIN \n altro numero PREDEFINITO\n");

let ruolo_3 = prompt("Scegli un ruolo inserendo un numero e clicca invio: \n1 PLAYER;\n2 MODERATOR; \n3 ADMIN \n altro numero PREDEFINITO\n");



switch (ruolo_1) {

    case "1":
    case 1:
        nome_ruolo_1 = "PLAYER. Funzione di solo gioco";

        break;


    case "2":
    case 2:
        nome_ruolo_1 = "MODERATOR. Funzione di moderatore del gioco";
        break;

    case "3":
    case 3:
        nome_ruolo_1 = "ADMIN. Funzione di amministratore del gioco";
        break;

    default:
        nome_ruolo_1 = "PREDEFINITO. Funzione non valida";

        break;



}
switch (ruolo_2) {

    case "1":
    case 1:
        nome_ruolo_2 = "PLAYER. Funzione di solo gioco";

        break;


    case "2":
    case 2:
        nome_ruolo_2 = "MODERATOR. Funzione di moderatore del gioco";
        break;

    case "3":
    case 3:
        nome_ruolo_2 = "ADMIN. Funzione di amministratore del gioco";
        break;

    default:
        nome_ruolo_2 = "PREDEFINITO. Funzione non valida";

        break;



}

switch (ruolo_3) {

    case "1":
    case 1:
        nome_ruolo_3 = "PLAYER. Funzione di solo gioco";

        break;


    case "2":
    case 2:
        nome_ruolo_3 = "MODERATOR. Funzione di moderatore del gioco";
        break;

    case "3":
    case 3:
        nome_ruolo_3 = "ADMIN. Funzione di amministratore del gioco";
        break;

    default:
        nome_ruolo_3 = "PREDEFINITO. Funzione non valida";

        break;



}

//bisogna prima creare un controllo per verificare che ci siano numeri o lettere



if (isNaN(Number(ruolo_1)) || isNaN(Number(ruolo_2)) || isNaN(Number(ruolo_3))) {
    ruolo_TOT = 0;
} else {
    ruolo_TOT = Number(ruolo_1) + Number(ruolo_2) + Number(ruolo_3);
}



if(ruolo_TOT == 9) {

    console.log("Ci può essere solo 1 admin, fai ripartire il file");

} else if ( ruolo_3 > 9) {

 console.log("Valori non validi, fai ripartire il file");

} else {

console.log("Hai scelto i seguenti ruoli: "+nome_ruolo_1+" / "+nome_ruolo_2+" / "+nome_ruolo_3);
}