const express = require("express");
const app = express();
const PORT = 5000;
const videogiochi = Object.freeze([
    { id: 1, titolo: "The Legend of Zelda: Breath of the Wild", piattaforma: "Nintendo Switch" },
    { id: 2, titolo: "Super Mario Odyssey", piattaforma: "Nintendo Switch" },
    { id: 3, titolo: "Red Dead Redemption 2", piattaforma: "PS4 / Xbox / PC" },
    { id: 4, titolo: "The Witcher 3: Wild Hunt", piattaforma: "PS4 / Xbox / PC / Switch" },
    { id: 5, titolo: "Minecraft", piattaforma: "Multi-piattaforma" },
    { id: 6, titolo: "Fortnite", piattaforma: "Multi-piattaforma" },
    { id: 7, titolo: "God of War", piattaforma: "PS4 / PS5" },
    { id: 8, titolo: "Elden Ring", piattaforma: "PS4 / PS5 / Xbox / PC" },
    { id: 9, titolo: "FIFA 24", piattaforma: "PS5 / Xbox / PC" },
    { id: 10, titolo: "Cyberpunk 2077", piattaforma: "PS5 / Xbox / PC" }
]);




app.get("/api/giochi", function (req, res) {



    res.status(200).json(videogiochi);


});




app.get("/api/giochi/:id", function (req, res) {


    const idVideogioco = Number(req.params.id);

    if (isNaN(idVideogioco)) {
        
        return res.status(400).json({
            errore: "ID non valido"
        });
    }


    
    const videogioco = videogiochi.find(
        g => g.id === idVideogioco);

    if (!videogioco) {
        
        return res.status(404).json({ 
            errore: "Risorsa non individuata nel sistema" 
        });

    }


    res.json(videogioco);




});


app.listen(PORT, () => {


    console.log("Server avviato sulla porta " + PORT);


});