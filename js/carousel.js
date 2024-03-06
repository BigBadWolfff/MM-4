var d = document;

window.addEventListener("load", function () {
  const slides = d.querySelectorAll(".slide");
  let currentSlide = 0;
  let autoSlideInterval; // Variabele om de interval-ID bij te houden

  // De functie doorloopt alle dia's en stelt de display eigenschap in op "block" voor de dia die
  // overeenkomt met de opgegeven index en op "none" voor alle andere dia's.
  // Dit resulteert in het tonen van de dia met de opgegeven index en het verbergen van alle andere dia's.
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
  }

  // De functie startAutoSlide() begint de automatische diavoorstelling door een interval in te stellen
  // dat elke 5 seconden de volgende dia toont met behulp van de nextSlide()-functie.
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Interval van 5 seconden voor automatisch schakelen
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval); // Stop de automatische schuifbeweging
  }

  d.getElementById("nextBtn").addEventListener("click", function () {
    stopAutoSlide(); // Stop automatisch schakelen wanneer handmatig wordt genavigeerd
    nextSlide();
    startAutoSlide(); // Start automatisch schakelen opnieuw na handmatige navigatie
  });

  d.getElementById("prevBtn").addEventListener("click", function () {
    stopAutoSlide(); // Stop automatisch schakelen wanneer handmatig wordt genavigeerd
    prevSlide();
    startAutoSlide(); // Start automatisch schakelen opnieuw na handmatige navigatie
  });

  // Start automatisch schakelen wanneer de pagina geladen is
  startAutoSlide();
});
