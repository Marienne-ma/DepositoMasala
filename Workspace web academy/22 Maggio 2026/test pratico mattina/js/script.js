// =========================
// HAMBURGER MENU
// =========================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// =========================
// FORM CONTATTI
// =========================

const contactForm = document.querySelector("form.contact-form");

if (contactForm && contactForm.querySelector("#oggetto")) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const dati = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
      oggetto: document.getElementById("oggetto").value,
      messaggio: document.getElementById("messaggio").value,
    };

    console.log("📩 CONTATTO:", dati);

    alert("Messaggio inviato con successo!");
    contactForm.reset();
  });
}


// =========================
// FORM SEGNALAZIONI
// =========================

const reportForm = document.querySelector("form.contact-form");

if (reportForm && document.getElementById("luogo")) {
  reportForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const dati = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
      luogo: document.getElementById("luogo").value,
      tipo: document.getElementById("tipo").value,
      messaggio: document.getElementById("messaggio").value,
      foto: document.getElementById("foto").value,
    };

    console.log("🚨 SEGNALAZIONE:", dati);

    alert("Segnalazione inviata con successo!");
    reportForm.reset();
  });
}