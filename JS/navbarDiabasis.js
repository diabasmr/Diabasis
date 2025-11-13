// 1) On inclut le nav, puis on initialise le JS
fetch("../HTML/diabasisNav.html")
  .then(response => response.text())
  .then(data => {
    const container = document.getElementById("include-Dnav");
    container.innerHTML = data;

    // On ré-exécute l'initialisation du menu UNE FOIS que le HTML est en place
    initNav(container);
  });

// 2) Fonction d'initialisation du nav (sera exécutée après injection)
function initNav(container) {
  const menu = container.querySelector("#homie");
  const sideNav = container.querySelector("nav");

  if (!menu || !sideNav) {
    console.warn("Navigation elements not found after injection.");
    return;
  }

  // Basculer menu
  menu.addEventListener("click", () => {
    sideNav.classList.toggle("open");
  });

  // Fermer menu en cliquant ailleurs
  document.addEventListener("click", (event) => {
    if (!sideNav.contains(event.target) && event.target !== menu) {
      sideNav.classList.remove("open");
    }
  });
}

