const input = document.getElementById("inputCalc");
const btn = document.getElementById("calcBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {

    try {
      //trasformo la stringa in codice js
        const value = eval(input.value);
        result.textContent = "Risultato: " + value;
    } catch (err) {
        result.textContent = "Errore nell'espressione";
    }

});