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


document.addEventListener("mousemove", (event) => {
    const middleY = window.innerHeight / 2; // Position verticale du milieu de l'écran

const margin = 50; // Une marge autour du centre (ajustez selon vos besoins)

    // Vérifier si la souris est au centre (avec une tolérance définie par "margin")
if (
    event.clientY > middleY - margin && event.clientY < middleY + margin
    ) {
        present.classList.add("show");
    }
});