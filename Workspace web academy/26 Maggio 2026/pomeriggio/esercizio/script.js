const prompt = require("prompt-sync")();
const fs = require("fs");


function getMessage() {
    let text = prompt("Testo per txt: ");

    
    fs.writeFileSync("./txt/file.txt", text, "utf8");
    console.log("File txt salvato!");


    let text_html = prompt("Testo per html: ");
    text_html = `${text_html}`;
    let html = fs.readFileSync("./html/index.html", "utf8");

    ///<p>.*?<\/p>/, regex
    html = html.replace(
        /<p>.*?<\/p>/,
        `<p>${text_html}</p>`
    );

    fs.writeFileSync("./html/index.html", html, "utf8");
    console.log("testo html salvato!");

};

function readMessage() {
    return prompt("Vuoi visualizzare: \n1 txt\n2 html");

};


function showMessageTxt() {
    return fs.readFileSync("./txt/file.txt", "utf8");
};

function showMessageHtml(res) {
    fs.readFile("./html/index.html", (errore, dati) => {


        if (errore) {

            res.writeHead(500, { "Content-Type": "text/plain" });

            res.end("Errore nel caricamento del file");

            return;

        }


        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(dati);

    });
};



module.exports = {
    getMessage,
    readMessage,
    showMessageHtml,
    showMessageTxt
};