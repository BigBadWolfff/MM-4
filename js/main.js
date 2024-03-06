var d = document;

window.addEventListener("load", function () {
  initConsoles();
  // etc...
});

function initConsoles() {
  /* 	======================================================================	
		Browser & Object sniffing
	=========================================================================== */
  if (!d.getElementById("consoleContent")) return false;
  if (!d.getElementById("gameMap")) return false;
  if (typeof consoles == "undefined" || consoles.length < 2) return false;

  /* 	======================================================================	
		Variables
	=========================================================================== */
  var consoleContent = d.getElementById("consoleContent");
  var consoleMenuLinks = d.getElementsByClassName("consoleMenuLink");

  var eersteConsoleNr = 1;

  /* 	======================================================================	
		Initialisatie & DOM Manipulatie
	=========================================================================== */
  // Eerst de standaard melding weghalen.
  consoleContent.innerHTML = "";

  // #consoleContent article-tag vullen met twee divs.
  var dynamicCover = d.createElement("div");
  dynamicCover.setAttribute("class", "dynamicCover");
  dynamicCover.setAttribute("id", "consoleCover");

  // .dymanicCover div voor #consoleContent
  var dynamicCoverImg = d.createElement("img");
  dynamicCoverImg.setAttribute("width", "350");
  dynamicCoverImg.setAttribute("height", "auto");

  // .dynamicText div voor #consoleContent
  var dynamicText = d.createElement("div");
  dynamicText.setAttribute("class", "dynamicText");

  var consoleTitle = d.createElement("h2");
  consoleTitle.setAttribute("id", "consoleTitle");

  var consoleSynopsis = d.createElement("p");
  consoleSynopsis.setAttribute("id", "consoleSynopsis");

  var uitgebrachtDatum = d.createElement("p");
  uitgebrachtDatum.setAttribute("id", "uitgebrachtDatum");

  var consoleFabrikant = d.createElement("p");
  consoleFabrikant.setAttribute("id", "consoleFabrikant");

  // Voeg een nieuw element toe aan de DOM-structuur om de lijst met games en afbeeldingen weer te geven
  var gamesListContainer = document.createElement("div");
  gamesListContainer.setAttribute("class", "gamesListContainer");

  var gamesListTitle = document.createElement("h3");
  gamesListTitle.textContent = "Games";
  gamesListContainer.appendChild(gamesListTitle);

  var gamesList = document.createElement("ul");
  gamesList.setAttribute("class", "gamesList");
  gamesListContainer.appendChild(gamesList);

  dynamicText.appendChild(gamesListContainer);

  dynamicCover.appendChild(dynamicCoverImg);

  consoleContent.appendChild(dynamicCover);

  dynamicText.appendChild(consoleTitle);
  dynamicText.appendChild(consoleSynopsis);
  dynamicText.appendChild(consoleFabrikant);
  dynamicText.appendChild(uitgebrachtDatum);
  dynamicText.appendChild(gamesListContainer);

  consoleContent.appendChild(dynamicText);

  // Eerste game console klaarzetten
  updateConsole(eersteConsoleNr);

  /* 	======================================================================	
		Functions
	=========================================================================== */
  function updateConsole(consoleNr = 1) {
    var console = consoles[consoleNr];
    consoleTitle.textContent = console.naam;
    consoleSynopsis.innerHTML = console.beschrijving;
    uitgebrachtDatum.innerHTML =
      "<b>Uitgebrachtdatum:</b> " + console.uitgebrachtdatum;
    consoleFabrikant.innerHTML = "<b>Fabrikant:</b> " + console.fabrikant;
    dynamicCoverImg.src = "img/" + console.afbeelding;

    // Clear de bestaande lijst met games voordat we nieuwe games toevoegen
    gamesList.innerHTML = "";

    // Voeg elke game toe aan de lijst met games
    console.games.forEach(function (game) {
      var gameItem = document.createElement("li");
      gameItem.textContent = game;
      gamesList.appendChild(gameItem);
    });
  }

  /* 	======================================================================	
		Event binding
	=========================================================================== */
  var eventList = ["click"];

  // Voeg een klikgebeurtenis toe aan de consoleMenuLinks
  for (hetEvent of eventList) {
    for (consoleLink of consoleMenuLinks) {
      consoleLink.addEventListener(hetEvent, function (e) {
        e.preventDefault(); // Voorkomt dat de standaard actie van de link wordt uitgevoerd
        let consoleLinkNr = this.getAttribute("data-console-nr"); // Haal het console nummer uit het data-attribuut
        updateConsole(consoleLinkNr); // Roep de updateConsole functie aan met het console nummer

        gsap.to("#consoleContent", {
          duration: 0.5,
          opacity: 1, // Verander de opaciteit naar 1
          height: "fit-content",
          ease: "power2.inOut" // Voeg een animatie-effect toe voor een vloeiende overgang
        });
      });
    }
  }
}
