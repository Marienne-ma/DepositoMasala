// const http = require("http");

// http.createServer((req, res) => {


//     // Leggo richiesta

//     console.log(req.url);

//     let x = req.url;

//     // Invio risposta

//     res.write("Ciao "+x);


//     // Chiudo risposta

//     res.end();


// }).listen(3000);

// console.log("Server avviato sulla porta 3000");


const http = require("http");
const open = (...args) => import("open").then(m => m.default(...args));


const server = http.createServer((req, res) => {


    // Imposta il tipo di contenuto

    res.writeHead(200, { "Content-Type": "text/html" });


    // Invia HTML al browser

    res.end("<h1>Hello World</h1>");

});


server.listen(3000);

open("http://localhost:3000");