const prompt = require("prompt-sync")();


function getInput() {
    let text = prompt("Parola: ");
    let x = prompt("Lettera: ");
    return { text, x };
}


function toUpperText(text) {

    return text.toUpperCase();

}

function countText(text) {
    return text.length;
}

function checkText(text, x) {

    return text.includes(x);

}


module.exports= {
    getInput,
    toUpperText,
    countText,
    checkText
};