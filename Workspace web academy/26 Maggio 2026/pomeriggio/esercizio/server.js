const file = require("./script");
const open = (...args) => import("open").then(m => m.default(...args));

const http = require("http");
const fs = require("fs");

file.getMessage();
let a = file.readMessage();

const server = http.createServer((req, res) => {


    if (a === "1") {
        let testo = file.showMessageTxt();

         res.writeHead(200, { "Content-Type": "text/plain" });

        res.end(testo);


    } else {
        file.showMessageHtml(res);
    }
   

});


server.listen(3000, () => {
    console.log("Server avviato su http://localhost:3000");
    open("http://localhost:3000");
});



