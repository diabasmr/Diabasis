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
    // Déclenche l'action après 0.5 secondes
    setTimeout(() => {
      present.classList.add("show"); // Ajoute la classe "show"
    }, 500); // 500 ms = 0.5 secondes
  });

// Sélectionne le bouton
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Affiche ou cache le bouton selon la position du scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Scroll jusqu'en haut quand on clique sur le bouton
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Animation fluide
  });
});

//CLIC REVIEW
//sélectionne tous les articles
const livres = document.querySelectorAll('.livre');

livres.forEach(function(livre) {
    const image = livre.querySelector('img'); // image de chaque livre
    const review = livre.querySelector('.review'); // review correspondante

    // Clic sur l'image pour afficher/masquer la review
    image.addEventListener('click', function() {
        // Masque toutes les reviews sauf celle cliquée
        document.querySelectorAll('.review').forEach(r => {
            if (r !== review) r.classList.remove('visible');
        });

        // Toggle l'affichage de la review du livre cliqué
        review.classList.toggle('visible');
    });
});