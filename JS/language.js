// Dictionnaire
const translations = {
  en: {
    job_title: "FULL STACK DEVELOPER",

    intro_1:
      "Student in MMI. I'm a creative and passionate fashionista who loves to learn new mediums. I aim to become a skilled developer and cybersecurity specialist.",
    intro_2:
      "Currently looking for a 3-month internship in web development — ideally in England — to make my dream of working in London come true ✈️",

    download_cv: "🪪 Download my CV",

    projects_title: "👀 My projects",

    edu_title: "Education",
    edu_1_title: "Bachelor in Multimedia & Internet Professions",
    edu_1_desc: "(2024 - now) — Gustave Eiffel University",
    edu_2_title: "BAC with high honours (Math, CS, English)",
    edu_2_desc: "(2021 - 2024) — Émilie du Châtelet High School",

    contact_title: "Contact Me",
    contact_nom: "Full Name",
    contact_sujet: "Subject",
  },

  fr: {
    job_title: "DÉVELOPPEUSE FULL STACK",

    intro_1:
      "Étudiante en MMI. Je suis une passionnée créative et fashionista qui adore explorer de nouveaux médiums. Je souhaite devenir une développeuse polyvalente ainsi qu'experte en cybersécurité.",
    intro_2:
      "Actuellement à la recherche d'un stage de 3 mois en développement web — idéalement en Angleterre — pour réaliser mon rêve de travailler à Londres ✈️",

    download_cv: "🪪 Télécharger mon CV",

    projects_title: "👀 Mes projets",

    edu_title: "Éducation",
    edu_1_title: "BUT Métiers du Multimédia et de l’Internet",
    edu_1_desc: "(2024 - aujourd’hui) — Université Gustave Eiffel",
    edu_2_title: "BAC mention très bien (Maths, NSI, Anglais)",
    edu_2_desc: "(2021 - 2024) — Lycée Émilie du Châtelet",

    contact_title: "Me Contacter",
    contact_nom: "Nom complet",
    contact_sujet: "Sujet",
  },
};

// Lang actuelle
let currentLang = localStorage.getItem("lang") || "en";


// --------------------------------------------
// 1) FONCTION GLOBALE : appliquer la traduction
// --------------------------------------------
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = currentLang === "en" ? "🇬🇧 / 🇫🇷" : "🇫🇷 / 🇬🇧";
  }
}

window.applyTranslations = applyTranslations;


// --------------------------------------------
// 2) FONCTION GLOBALE : initialiser le bouton
// --------------------------------------------
function initLangToggle() {
  const toggleBtn = document.getElementById("lang-toggle");
  if (!toggleBtn) return;

  // mise à jour initiale
  applyTranslations();

  toggleBtn.onclick = () => {
    currentLang = currentLang === "en" ? "fr" : "en";
    localStorage.setItem("lang", currentLang);
    applyTranslations();
  };
}

window.initLangToggle = initLangToggle;


// --------------------------------------------
// 3) Lancer la traduction à la fin du DOM
// --------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  initLangToggle();
});
