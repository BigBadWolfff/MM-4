// Logo animatie
const logo = document.getElementById("logo");

// Maak een GSAP animatietween aan
gsap.to(logo, {
  duration: 2, // Duur van de animatie in seconden
  rotation: 360, // Draai de afbeelding 360 graden
  scale: 1.5, // Schaal de afbeelding naar 1.5x grootte
  ease: "power1.inOut" // Gebruik een versnellingsfunctie voor soepele animatie
});

// Animeren van de navigatie-items met stagger
gsap.from(".nav-links li", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.5,
  stagger: 0.5 // Voeg een vertraging toe tussen elk navigatie-item
});

// Hamburgermenu-animatie
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    gsap.to(this.children, {
      rotation: 360,
      duration: 0.5,
      ease: "power2.inOut"
    });
  });

// Inkomende animatie voor de header-banner op de geschiedenis pagina
gsap.from(".header-banner", { opacity: 0, y: -50, duration: 1, delay: 0.5 });

// Quiz Header Fade-in
gsap.from(".quiz-header", { opacity: 0, y: 50, duration: 1, delay: 1 });
