// Selezione elementi

let input = document.getElementById("input");
let button = document.getElementById("button");
let button_list = document.getElementById("button_list");
let title = document.getElementById("title");
let paragraph = document.getElementById("paragraph");
let list = document.getElementById("list");
let n_list = document.getElementById("n_list");
let n = 0;

eventMouseOverButton();

// Aggiunta event listener

button.addEventListener("click", function () {


    let new_element = document.createElement("li");


    new_element.addEventListener("click", function () {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        this.style.color = `rgb(${r}, ${g}, ${b})`;

    });

    let input_value = input.value;



    if (input_value === "" || input_value === undefined) {

        alert("input vuoto");

    } else {
       
        let y = checkList(input_value);

        new_element.textContent = input_value;
        input.value = "";
        new_element.classList.toggle("bold");

       

        if(y === 0 ){
            n++;
            list.appendChild(new_element);
            list.style.display = "block";
            n_list.style.display = "block";
            button_list.style.display = "block";
            updateNList();
            return;
        }
        
        alert("elemento già esistente");
    }

    
    

});


button_list.addEventListener("click", function () {

    list.innerHTML = "";
    list.style.display = "none";
    n_list.style.display = "none";
    button_list.style.display = "none";

});


function updateNList() {

    n_list.innerHTML = `elementi in lista: ${n}`;

}


function checkList(value_li) {

    //se li ha già restituisce true
    let x = Array.from(list.children).some(li => li.textContent === value_li);

    if (x) {
        return 1; // blocca inserimento
    }

    return 0;

}

function eventMouseOverButton() {

    let buttons = document.querySelectorAll("button");

    for(let i of buttons) {

        i.addEventListener("mouseover", function () {
            this.style.backgroundColor = "rgb(237, 114, 134)";
             this.style.color = "black";

        });

         i.addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
        this.style.color = "";
    });



    }
}