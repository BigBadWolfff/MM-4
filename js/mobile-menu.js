// Voeg een klikgebeurtenis toe aan het hamburgerpictogram
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    // Selecteer het mobiele menu
    var mobileMenu = document.getElementById("mobile-menu");

    // Toggle de zichtbaarheid van het mobiele menu
    if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  });
