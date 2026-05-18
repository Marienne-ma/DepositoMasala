const prompt = require("prompt-sync")();
let condition;
let numeri_pari = 0;
let numeri_dispari = 0;

do {

    let request = prompt("Inserisci un numero intero positivo:\n");


        request = Number(request);

        if (Number.isNaN(request) || request % 2 !== 0) {

            console.log("valore non valido");
            condition = false;

        } else {

            condition = true;

        }


    if (condition) {

        for (let i = 0; i <= request; i++) {

            if (i % 2 === 0) {
                numeri_pari++;
            } else {
                numeri_dispari++;
            }

        }

        console.log("numeri pari compreso lo 0: " + numeri_pari + ", numeri dispari : " + numeri_dispari);
      

    } 


} while (!condition);




