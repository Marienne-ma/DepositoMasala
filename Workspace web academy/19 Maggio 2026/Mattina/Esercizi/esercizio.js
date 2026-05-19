let prompt = require("prompt-sync")();

//in posizione 0 risultati somma, in posizione 1 risultati sottrazione, in posizione 2 risultati moltiplicazione, in posizione 3 risultati divisione
let risultati = [[], [], [], []];
let n_1 = 0;
let n_2 = 0;
let condition = true;

do {

    let request = prompt("Scegli l'operazione che vuoi eseguire scrivendo il numero dal menù:\n1 SOMMA\n2 SOTTRAZIONE\n3 MOLTIPLICAZIONE\n4 DIVISIONE");

    n_1 = Number(prompt("Inserisci il primo numero:"));

    n_2 = Number(prompt("Inserisci il secondo numero:"));

    verificaNumeri(request);

} while (condition);


console.log("Ecco i risultati della somma: "+risultati[0]+"\nEcco i risultati della sottrazione: "+risultati[1]+"\nEcco i risultati della moltiplicazione: "+risultati[2]+"\nEcco i risultati della divisione: "+risultati[3]);

function somma(a, b) {
    return a + b;
}

function sottrazione(a, b) {
    return a - b;
}

function moltiplicazione(a, b) {
    return a * b;
}

function divisione(a, b) {
    return a / b;
}

function operazione_switch(request) {

    switch (request) {

        case "1":
            risultati[0].push(somma(n_1, n_2));
            break;

        case "2":
            risultati[1].push(sottrazione(n_1, n_2));
            break;

        case "3":
            risultati[2].push(moltiplicazione(n_1, n_2));
            break;

        case "4":
            risultati[3].push(divisione(n_1, n_2));
            break;

        default:
            break;

    }

}

function verificaNumeri(request) {

    if (!isNaN(n_1) && !isNaN(n_2)) {

        operazione_switch(request);
        
        request = prompt("vuoi continuare?\n SI\n NO");
        
        (request === "SI") ? condition = true : condition = false;

    } else if (isNaN(n_1)) {

        n_1 = Number(prompt("Primo numero non valido. Inseriscilo un numero valido:"));
        verificaNumeri(request);

    } else if (isNaN(n_2)) {

        n_2 = Number(prompt("Secondo numero non valido. Inseriscilo un numero valido:"));
        verificaNumeri(request);
    }

}


function aggiuntaNumeri(){

    request= prompt("Aggiungi altri numeri oppure scrivi NO");

    if(request === "SI"){


    } else if (request === "NO") {


    } else {
        console.log("risposta non valida.");
        aggiuntaNumeri();
    }


}

function verificaNumero(n) {

    if(!isNaN(n)) {

    } else {
        
    }
}


