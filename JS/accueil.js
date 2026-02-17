// MAJ

// Animation de texte pour les postes
const poste = document.getElementById("posteAnimate");
const textes = [
  "( FULL-STACK DEVELOPER )",
  "( 3D ARTIST )",
  "( UI/UX DESIGNER )",
];
let index = 0;

setInterval(() => {
  // Animation sortie
  poste.style.transform = "translateY(-100%)";
  poste.style.opacity = "0";

  setTimeout(() => {
    // Changer texte
    index = (index + 1) % textes.length;
    poste.textContent = textes[index];

    // Placer en dessous sans transition
    poste.style.transition = "none";
    poste.style.transform = "translateY(100%)";

    // Forcer reflow pour réactiver l'animation
    void poste.offsetHeight;

    // Réactiver transition
    poste.style.transition = "transform 0.6s ease, opacity 0.6s ease";
    poste.style.transform = "translateY(0)";
    poste.style.opacity = "1";
  }, 600);
}, 2000);

// CAROUSEL FACTS
const cards = document.querySelectorAll(".carousel-card");

// --------- HOVER DESKTOP ----------
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
  });
});

// --------- SCROLL MOBILE ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cards.forEach((card) => card.classList.remove("active"));
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.65,
  },
);

cards.forEach((card) => observer.observe(card));

// EMAIL JS
(function () {
  emailjs.init("lL6dqvTjiWrOKlBqR");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .sendForm("service_diabaPortfolio", "template_ezfua8n", this)
      .then(() => {
        alert("✅ Thank you! Your message has been sent successfully.");
        this.reset();
      })
      .catch((error) => {
        alert("❌ An error occurred: " + JSON.stringify(error));
      });
  });
