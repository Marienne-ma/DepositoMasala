let prompt = require("prompt-sync")();
let condition = true;
let words = [];
let wordsUpper = [];
let n_words = 0;
let word_max = "";
let word_min = "";
let n_vowel = 0;
let vowels = ["a", "e", "i", "o", "u"];

do {

    let n = Number(prompt("Quante parole vuoi inserire?"));


    if (!isNaN(n) && n > 0) {

        for (let i = 0; i < n; i++) {

            let word = prompt("Inserisci una parola");

            controlWord(word);


        }

        condition = false;

    }

} while (condition);





function controlWord(word) {

    if (word !== "") {
        words.push(word);
        pushToUpper(word);
        n_words++;
    }

}

wordMax();
wordMin();
nVowel();

console.log(
    "Le parole inserite sono: " + words+
    "\nIn tutto sono: " + n_words+
    "\nLa parola più lunga è: " + word_max+
    "\nLa parola più corta è: " + word_min+
    "\nLe parole che iniziano con vocali sono: " + n_vowel+
    "\nLa parole trasformate in maiuscolo: " + wordsUpper
);


function wordMax() {

    word_max = words.reduce((max, w) =>
        w.length > max.length ? w : max
    );
}

function wordMin() {
    word_min = words.reduce((min, w) =>
        w.length < min.length ? w : min
    );
}

function nVowel() {
    n_vowel = words.reduce((n, w) =>
        vowels.includes(w[0]) ? n + 1 : n
        , 0);
}

function pushToUpper(word) {

    wordsUpper.push(word.toUpperCase());
    
}









