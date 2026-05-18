const prompt = require("prompt-sync")();
// let request;
// let numeri = [];
// let numeri_pari = [];
// let numeri_dispari = [];
// let somma = 0;
// let n_max = 0;
// let n_min = 0;


// do {
//     request = prompt("Inserisci un numero intero, peer finire inserisci 0:\n");

//     request = Number(request);

//     if (!Number.isNaN(request) && request > 0)
//         numeri.push(request);

// } while (request !== 0);

// for (let n of numeri) {

//     n % 2 === 0 ? numeri_pari.push(n) : numeri_dispari.push(n);

//     somma += n;

// }

// if(numeri.length !== 0)
// {
// n_max = Math.max(...numeri);
// n_min = Math.min(...numeri);
// } else {
//     numeri = "nessun numero inserito";
// }



// if(numeri_pari.length === 0) numeri_pari = "nessun numero pari inserito";

// if(numeri_dispari.length === 0) numeri_dispari = "nessun numero dispari inserito";



// console.log("numeri inseriti: \n" +
//     numeri +
//     "\nnumeri pari: \n" +
//     numeri_pari +
//     "\nnumeri dispari: \n" +
//     numeri_dispari +
//     "\nla somma: \n" +
//     somma +
//     "\nnumero più grande: \n" +
//     n_max +
//     "\nnumero più piccolo: \n" +
//     n_min
// );




// EXTRA Provare a gestire un array di array dove carichi nell array a posizione 0 le stringhe e in array a posizione 1 i numeri


let vario = [[], []];

do {
    request = prompt("Inserisci un valore, stringa o numero, per finire inserisci 'esci':\n");


    if (request !== "esci") {

       let x = Number(request);

        Number.isNaN(x) ? vario[0].push(request) : vario[1].push(x);
    }


} while (request !== "esci");


console.log("stringhe inserite: \n"+vario[0]+
    "\nnumeri inseriti: \n"+vario[1]
)




