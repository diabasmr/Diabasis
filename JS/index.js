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

const present = document.getElementById(`intro`)

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

livres.forEach(function (livre) {
  const image = livre.querySelector('img'); // image de chaque livre
  const review = livre.querySelector('.review'); // review correspondante

  // Clic sur l'image pour afficher/masquer la review
  image.addEventListener('click', function () {
    // Masque toutes les reviews sauf celle cliquée
    document.querySelectorAll('.review').forEach(r => {
      if (r !== review) r.classList.remove('visible');
    });

    // Toggle l'affichage de la review du livre cliqué
    review.classList.toggle('visible');
  });
});

//CINEMA FACTS
//IMAGE SLIDER
let currentIndex = 0;
const carrousels = document.querySelector('.slidescine');
const totalSlides = document.querySelectorAll('.slidecine').length;

function updatecarrousel() {
  const slideWidth = document.querySelector('.carrouselcine').offsetWidth;
  carrousels.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextcarrousel() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updatecarrousel();
}

function prevcarrousel() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updatecarrousel();
}

window.addEventListener('resize', updatecarrousel); // Responsive !

//JOURNAL SLIDER
const slides = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}
function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  }
  else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

//articles
const cartes = document.querySelectorAll('.card');

cartes.forEach(function (carte) {
  const article = carte.nextElementSibling;

  // Clic sur l'image pour afficher/masquer l'article
  carte.addEventListener('click', function () {
    // Masque tous les articles sauf celui cliqué
    document.querySelectorAll('.article').forEach(art => {
      if (art !== article) art.classList.remove('voir');
    });

    article.classList.toggle('voir');
  });
});

//JOURNAL FACTS
const people = document.querySelectorAll('.people');

people.forEach(function (person) {
  const peoplePhoto = person.querySelector('.peoplePhoto'); // image de chaque livre

  // Clic sur l'image pour afficher/masquer la review
  document.querySelectorAll('.peoplePhoto').forEach(photo => {
    photo.addEventListener('click', function (event) {
      const classe = event.target.id;
      console.log("ID cliqué :", classe);

      const peopleArticle = document.querySelector(`.${classe}`);

      if (!peopleArticle) {
        console.log("Aucun article trouvé avec la classe :", classe);
        return;
      }

      document.querySelectorAll('.peopleArticle').forEach(r => {
        if (r !== peopleArticle) r.classList.remove('visible');
      });

      peopleArticle.classList.toggle('visible');
    });
  })
});

/////////
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.bento-box img');
  const carte = document.getElementById('cartefashion');
  const Imgcarte = document.getElementById('Image');
  const closeBtn = document.getElementById('fermer');
  const titre = document.getElementById('FashionTitle');
  const description = document.getElementById('Description');

  images.forEach(img => {
    img.addEventListener('click', () => {
      carte.style.display = 'flex';
      Imgcarte.src = img.src;
      Imgcarte.alt = img.alt;  //reprends l'image et le alt de l'image cliquée
      titre.textContent = img.title;
      description.textContent = img.dataset.description;
    });
  });

  closeBtn.addEventListener('click', () => {
    carte.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === carte) {
      carte.style.display = 'none';
    }
  });
});

function openFullscreen(media) {
  if (media.requestFullscreen) {
    media.requestFullscreen();
  } else if (media.webkitRequestFullscreen) { // Safari
    media.webkitRequestFullscreen();
  } else if (media.msRequestFullscreen) { // IE/Edge
    media.msRequestFullscreen();
  }
}
