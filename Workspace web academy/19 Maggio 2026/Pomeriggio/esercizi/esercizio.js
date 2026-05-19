let prompt = require("prompt-sync")();
let request_1;
let request_2;
let request_3;

let objects = [];

let condition = true;

let tot = 0;

let object_price_max = {
    name: "",
    price: 0,
    qta: 0
};

let objects_available = [];

let objects_name = [];



do {

    let object = {
        name: "",
        price: 0,
        qta: 0
    };


    let request = prompt("Inserisci un nuovo oggetto alla lista, scrivi esci per terminare.\nNome dell'oggetto:");

    if (request.toLowerCase() === "esci") {
        condition = false

    } else if (request !== "") {

        object["name"] = request;

        do {

            request_1 = Number(prompt("Inserisci il prezzo dell'oggetto:"));

            if (request_1 !== 0 && !isNaN(request_1)) {

                object["price"] = request_1;

                do {

                    request_2 = Number(prompt("Inserisci la quantità dell'oggetto:"));

                    if (request_2 >= 0 && !isNaN(request_2)) {

                        object["qta"] = request_2;



                        do {
                            request_3 = Number(prompt("Il prodotto è disponibile?:\n0 NO - 1 SI"));
                            if (request_3 === 1 || request_3 === 0) {

                                object["available"] = (request_3 === 0) ? false : true;


                            }

                        } while (request_3 !== 1 && request_3 !== 0 && isNaN(request_3));


                    }

                } while (request_2 < 0 || isNaN(request_2));

            }

        } while (object.price === 0);

        objects.push(object);

    } else {

        console.log("Dato non valido");

    }


} while (condition);

allNames();
totalPrice();
objectPriceMax();
objectsAvailable();
allNames();

if (objects.length !== 0) {

    console.log("elenco dei prodotti:");
    console.log(objects);

    console.log("valore totale dei prodotti:");
    console.log(tot);

    console.log("prodotto più costoso:");
    console.log(object_price_max);

    console.log("prodotti disponibili:");
    console.log(objects_available);

    console.log("nomi dei prodotti:");
    console.log(objects_name);

}


function totalPrice() {

    //of perchè usa l'elemento mentre in usa l'indice dell'elemento
    for (let x of objects) {

        tot += x.price * x.qta;

    }


}

function objectPriceMax() {

    for (let x of objects) {

        if (object_price_max.price < x.price)
            object_price_max = x;

    }

}

function objectsAvailable() {

    objects_available = objects.filter(obj => obj.available);

}

function allNames() {

    objects_name = objects.map(obj => obj.name);

}