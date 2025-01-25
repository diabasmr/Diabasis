let menu = document.getElementById(`homie`);
const sideNav = document.querySelector("nav");

// Basculer l'état "open" sur le clic du bouton
menu.addEventListener("click", () => {
    sideNav.classList.toggle("open");
});

// Fermer le menu si l'utilisateur clique en dehors
document.addEventListener("click", (event) => {
    if (!sideNav.contains(event.target) && event.target !== menu) {
        sideNav.classList.remove("open");
    }
});

const present= document.getElementById(`intro`)


window.addEventListener("load", () => {
    // Déclenche l'action après 1.5 secondes
    setTimeout(() => {
      present.classList.add("show"); // Ajoute la classe "show"
    }, 1500); // 1500 ms = 1.5 secondes
  });