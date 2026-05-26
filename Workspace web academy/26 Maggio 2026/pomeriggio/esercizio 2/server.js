const prompt = require("prompt-sync")();
// const open = (...args) => import("open").then(m => m.default(...args));

const http = require("http");
const fs = require("fs");
const path = require("path");

let x = prompt("Vuoi visualizzare: \n1 HOME\n2 INFO\n3 CALCOLATRICE\n");

let htmlPath;

switch (x) {
    case "1":
        htmlPath = "./index.html";
        break;
    case "2":
        htmlPath = "./info.html";
        break;
    case "3":
        htmlPath = "./calcolatrice.html";
        break;
    default:
        htmlPath = "./index.html";
}

const server = http.createServer((req, res) => {

    let filePath = "." + req.url;

    // HOME
    if (req.url === "/") {
        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Errore HTML");
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
        return;
    }

    // CSS / JS / IMG ecc.
    const ext = path.extname(filePath);

    const mime = {
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".html": "text/html"
    };

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            return res.end("File non trovato");
        }

        res.writeHead(200, {
            "Content-Type": mime[ext] || "text/plain"
        });

        res.end(data);
    });

});

server.listen(3000, () => {
    console.log("Server attivo su http://localhost:3000");
    // open("http://localhost:3000");
});