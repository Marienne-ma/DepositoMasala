// Selezione elementi

let title = document.getElementById("title");
let button_title = document.getElementById("btn_title");

let description = document.getElementById("description");
let button_description = document.getElementById("btn_description");


let animals_grid = document.getElementById("animals_grid");
let button_addAnimal = document.getElementById("btn_addAnimal");

let input_name = document.getElementById("animal_name");
let input_desc = document.getElementById("animal_desc");

let inputsVisible = false;


let button_addLion = document.getElementById("btn_addLion");
let button_addElephant = document.getElementById("btn_addElephant");

let button_deleteLastAnimal = document.getElementById("btn_deleteLastAnimal");


let button_layout = document.getElementById("btn_layout");

let animals_list = document.getElementById("animals_list");
let baseAnimalsCount = document.querySelectorAll("#animals_list li").length;
let animals = [];
let animals_list_add = document.getElementById("animals_list_add");

let button_insertAnimal = document.getElementById("btn_insertAnimal");


button_title.addEventListener("click", function () {

    title.style.color = "darkgreen";

});




button_addAnimal.addEventListener("click", function () {

    // 1. Mostra input + bottone inserisci
    if (!inputsVisible) {
        input_name.classList.remove("hidden");
        input_desc.classList.remove("hidden");
        button_insertAnimal.classList.remove("hidden");

        inputsVisible = true;
        return;
    }

});


// ================= INSERISCI ANIMALE =================
button_insertAnimal.addEventListener("click", function () {

    let name = input_name.value.trim();
    let desc = input_desc.value.trim();

    if (name === "" || desc === "") {
        alert("Inserisci nome e descrizione!");
        return;
    }

    let card = document.createElement("div");
    card.classList.add("animal_card");

    card.innerHTML = `
        <h2>🐾 ${name}</h2>
        <p>${desc}</p>
        <button class="btn_delete">Elimina animale</button>
    `;

    animals_grid.appendChild(card);

    animals.push(`🐾 ${name}`);

    input_name.value = "";
    input_desc.value = "";

    input_name.classList.add("hidden");
    input_desc.classList.add("hidden");
    button_insertAnimal.classList.add("hidden");

    inputsVisible = false;
});


//Intercetta il click nella griglia e, se il target è un bottone di eliminazione, rimuove la card relativa dal DOM
animals_grid.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn_delete")) {
        e.target.closest(".animal_card").remove();
    }
});



button_addLion.addEventListener("click", function () {

    let card = document.createElement("div");
    card.classList.add("animal_card");

    card.innerHTML = `
        <h2>🦁 Leone Dev</h2>
        <p> Leader dello zoo, domina il repository e ruggisce contro i merge conflittuali.
    Non accetta bug in produzione.</p>
        <button class="btn_delete">Elimina animale</button>
    `;

    animals_grid.appendChild(card);
    animals.push("🦁 Leone Dev");

});


button_addElephant.addEventListener("click", function () {

    let card = document.createElement("div");
    card.classList.add("animal_card");

    card.innerHTML = `
        <h2>🐘 Elefante Debug</h2>
        <p>  Grande e potente, ricorda tutto: anche i bug dimenticati da mesi.
    Quando passa lui nel codice, nulla viene lasciato indietro.</p>
        <button class="btn_delete">Elimina animale</button>
    `;

    animals_grid.appendChild(card);
     animals.push("🐘 Elefante Debug");


});



button_deleteLastAnimal.addEventListener("click", function () {

    let cards = document.querySelectorAll(".animal_card");

    if (cards.length === 0) {
        alert("Non ci sono animali da eliminare!");
        return;
    }

    let lastCard = cards[cards.length - 1];
    lastCard.remove();

});


button_description.addEventListener("click", function () {

    animals_list_add.innerHTML = "";

    animals.forEach(animal => {
        let li = document.createElement("li");
        li.textContent = animal;
        animals_list_add.appendChild(li);
    });

});

button_layout.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

});
