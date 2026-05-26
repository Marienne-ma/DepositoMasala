const file = require("./app");
const open = (...args) => import("open").then(m => m.default(...args));
const http = require("http");

let {text, x} = file.getInput();

const server = http.createServer((req, res) => {


    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`<h1>testo originale: ${text}</h1>
            <h2>testo maiuscolo: ${file.toUpperText(text)}</h2>
            <h2>conteggio lettere: ${file.countText(text)}</h2>
            <h2>contiene la lettera ${x}? ${file.checkText(text, x)}</h2>`);




});


server.listen(3000, () => {
    console.log("Server avviato su http://localhost:3000");
    open("http://localhost:3000");
});


//ora non serve più
// function closeServer() {
//     server.close(() => {
//         console.log("Server chiuso");
//     });
// }


