let usernameInput = document.getElementById("username");
let gameInput = document.getElementById("game");
let platformInput = document.getElementById("platform");

const saveButton = document.querySelector(".primary");
const playersContainer = document.getElementById("card-players");
const deletePlayersBtn = document.getElementById("deletePlayers");
const clearAllBtn = document.getElementById("clearAll");

/* caricamento iniziale della pagina */
window.addEventListener("DOMContentLoaded", function () {
    if (playersContainer) {
        loadPlayers();
        updateDeleteButtonState();
    }
});

/* salvataggio nuovo player */
if (saveButton && usernameInput && gameInput && platformInput) {
    saveButton.addEventListener("click", function (e) {
        e.preventDefault();

        let username = usernameInput.value.trim();
        let game = gameInput.value.trim();
        let platform = platformInput.value;

        if (!username || !game || !platform) {
            alert("Compila tutti i campi!");
            return;
        }

        addPlayer(username, game, platform);
        savePlayerToLocalStorage(username, game, platform);
        updateDeleteButtonState();

        usernameInput.value = "";
        gameInput.value = "";
        platformInput.value = "";
    });
}

/* creazione card player */
function addPlayer(username, game, platform) {
    if (!playersContainer) return;

    playersContainer.innerHTML += `
        <div class="player-card">
            <h3>${username}</h3>
            <p>🎮 Gioco: ${game}</p>
            <p>🕹️ Piattaforma: ${platform}</p>
        </div>
    `;
}

/* salvataggio player nel localStorage */
function savePlayerToLocalStorage(username, game, platform) {
    let players = JSON.parse(localStorage.getItem("players")) || [];
    players.push({ username, game, platform });
    localStorage.setItem("players", JSON.stringify(players));
}

/* caricamento player dal localStorage */
function loadPlayers() {
    if (!playersContainer) return;

    let players = JSON.parse(localStorage.getItem("players")) || [];
    playersContainer.innerHTML = "";

    players.forEach(p => {
        addPlayer(p.username, p.game, p.platform);
    });
}

/* eliminazione tutti i player */
if (deletePlayersBtn) {
    deletePlayersBtn.addEventListener("click", () => {
        localStorage.removeItem("players");

        if (playersContainer) playersContainer.innerHTML = "";

        updateDeleteButtonState();
    });
}

/* reset completo applicazione */
if (clearAllBtn) {
    clearAllBtn.addEventListener("click", () => {
        localStorage.clear();

        if (playersContainer) playersContainer.innerHTML = "";
        if (usernameInput) usernameInput.value = "";
        if (gameInput) gameInput.value = "";
        if (platformInput) platformInput.value = "";

        document.body.classList.remove("light-theme");

        updateDeleteButtonState();

        window.location.reload();
    });
}

/* attiva/disattiva bottone elimina */
function updateDeleteButtonState() {
    if (!deletePlayersBtn) return;

    let players = JSON.parse(localStorage.getItem("players")) || [];

    players.length === 0 ? deletePlayersBtn.style.display= "none" : deletePlayersBtn.style.display= "block";
}