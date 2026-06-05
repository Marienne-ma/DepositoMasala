function invertiStringaAsincrona(testo, callback) {

    setTimeout(() => {
        callback(testo.toUpperCase());
    }, 1500);


}


//eseguo la callback
invertiStringaAsincrona("1- Sono una funzione async gestita da una callback", (risultato) => {
    console.log(risultato);
});


function invertiStringaPromise(testo) {

    let prom = new Promise((resolve, reject) => {

        if (testo === "") {

            reject("2- Errore: testo vuoto");

        } else {
            resolve("2- Risposta OK");


        }

    });

    return prom;
}

let testo_ = "";

//eseguo la 1^ promise

invertiStringaPromise(testo_)
    .then(risultato => console.log(risultato))
    .catch(error => console.log(error));



//eseguo la 2^ promise
invertiStringaPromise(testo_)
    .then(risultato => {
        console.log(risultato);
    })
    .catch(error => {
        console.log(error);
    });



function invertiStringaPerAwait(testo) {
    return new Promise((risultato) => {

        risultato(testo.toUpperCase());

    });
}

async function funzioneAsyncAwait() {

    try {

        let risultato = await invertiStringaPerAwait("3- Sono il risultato di async/await");

        console.log(risultato);

    } catch (error) {
        console.log(error);
    }

}

//eseguo async await
funzioneAsyncAwait();

//risultato
// 2- Errore: testo vuoto
// 3- SONO IL RISULTATO DI ASYNC/AWAIT
// 2- Errore: testo vuoto
// 1- SONO UNA FUNZIONE ASYNC GESTITA DA UNA CALLBACK
// la callback parte ma viene esegita dopo 1.5s, nel mentre viene eseguita la prima promise, 