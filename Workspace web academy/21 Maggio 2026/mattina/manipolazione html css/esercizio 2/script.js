
//const perchè i valori sono fissi
const form = document.getElementById("book_form");
const grid = document.getElementById("book_grid");

const toggleThemeBtn = document.getElementById("btn_layout");
const toggleFormBtn = document.getElementById("toggle_form_btn");
const formWrapper = document.getElementById("form_wrapper");

/* THEME */
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

/* FORM TOGGLE */
toggleFormBtn.addEventListener("click", () => {
  formWrapper.classList.toggle("hidden");
});

/* ADD BOOK */
form.addEventListener("submit", (e) => {

    //previene il ricaricamento
  e.preventDefault();

  let title = document.getElementById("title_input").value;
  let author = document.getElementById("author_input").value;
  let genre = document.getElementById("genre_input").value;
  let year = document.getElementById("year_input").value;
  let desc = document.getElementById("desc_input").value;

  let card = document.createElement("div");
  card.classList.add("book_card");

  card.innerHTML = `
    <h2>📖 ${title}</h2>
    <p><strong>Autore:</strong> ${author}</p>
    <p><strong>Genere:</strong> ${genre}</p>
    <p><strong>Anno:</strong> ${year}</p>
    <p>${desc}</p>
    <button class="btn_delete">Elimina</button>
  `;

  grid.appendChild(card);

  form.reset();
  formWrapper.classList.add("hidden");
});

/* DELETE */
grid.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn_delete")) {
    e.target.closest(".book_card").remove();
  }
});


const menuButton = document.getElementById("menu_button");
const navMenu = document.getElementById("nav_menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});