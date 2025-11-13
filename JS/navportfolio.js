fetch("../HTML/navPortfolio.html")
  .then(response => response.text())
  .then(data => {
    const container = document.getElementById("include-navp");
    container.innerHTML = data;

    // Reconnecter le bouton de langue une fois chargé
    if (window.initLangToggle) {
      window.initLangToggle();
    }
  });

