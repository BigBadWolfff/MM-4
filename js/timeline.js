// Simulatie van database met gebeurtenissen
const timelineEvents = [
  {
    year: 1972,
    event: "Lancering van Pong",
    details: `
    Pong, uitgebracht in 1972 door Atari, wordt beschouwd als een van de eerste succesvolle videogames en wordt vaak beschouwd als het startschot voor de game-industrie zoals we die vandaag kennen. Het spel simuleert een tafeltenniswedstrijd, waarbij spelers virtuele peddels gebruiken om een virtuele bal over een scherm heen en weer te slaan. Pong was eenvoudig van opzet maar zeer verslavend, en het succes ervan hielp om videogames populair te maken bij het grote publiek. Met zijn simpele gameplay legde Pong de basis voor toekomstige ontwikkelingen in de game-industrie en wordt het vaak herinnerd als een iconisch en baanbrekend spel.
    <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/fhd7FfGCdCo?si=SavMlm_cqwNsW1o4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  `,
  },
  {
    year: 1977,
    event: "Lancering van de Atari 2600",
    details:
      "De lancering van de Atari 2600 in 1977 markeerde een mijlpaal in de geschiedenis van videogames, waarbij het een van de eerste populaire thuisconsoles werd die brede erkenning kreeg. De Atari 2600 introduceerde een breed scala aan spellen en een krachtigere hardware dan eerdere consoles, waardoor spelers een gevarieerde en meeslepende game-ervaring konden beleven in hun eigen huis. Het succes van de Atari 2600 droeg bij aan de groeiende populariteit van videogames en legde de basis voor de moderne game-industrie zoals we die vandaag kennen.<img class='popup-img' src='../img/atari-2600-ad-start-year-off-with-a-bang.jpg' alt='Afbeelding van de lancering van de Atari 2600'>",
  },
  {
    year: 1980,
    event: "Lancering van Pac-Man",
    details: `
      De lancering van Pac-Man in 1980 betekende een revolutie in de gamingwereld. Pac-Man was een van de eerste arcadespellen die een enorm wereldwijd succes werd, met zijn iconische gele personage en innovatieve gameplay. Het spel werd een cultureel fenomeen en zette de standaard voor vele arcade- en later thuisgames. Pac-Man introduceerde niet alleen een nieuw soort gameplay, maar ook een herkenbaar personage dat tot op de dag van vandaag een iconische status heeft behouden.
      <div class="pacman-container">
        <div class="pacman"></div>
      </div>
    `,
  },
  {
    year: 1983,
    event: "Videogamecrash van 1983",
    details:
      "De Videogamecrash van 1983 was een periode van grote neergang in de videogame-industrie, gekenmerkt door een overvloed aan slechte kwaliteit games, marktverzadiging en consumentenapathie. Deze crash leidde tot faillissementen van gamebedrijven en een algemeen verlies van vertrouwen in de markt.",
  },
  {
    year: 1985,
    event: "Introductie van de NES",
    details:
      " De introductie van de Nintendo Entertainment System (NES) in 1985 markeerde het begin van Nintendo's iconische positie in de videogame-industrie. De NES bracht klassieke games zoals Super Mario Bros. en The Legend of Zelda, en populariseerde de thuisconsolemarkt na de crash van 1983.",
  },
  {
    year: 1989,
    event: "Lancering van de Game Boy",
    details:
      "De lancering van de Game Boy betekende de opkomst van draagbare gaming. Met zijn draagbaarheid en iconische games zoals Tetris, werd de Game Boy een enorm succes en legde het de basis voor handheld gaming als een belangrijk segment in de industrie.",
  },
  {
    year: 1990,
    event: "Introductie van de Super Nintendo Entertainment System (SNES)",
    details:
      "De introductie van de SNES bracht geavanceerde graphics en geluid naar thuisgaming, waardoor klassieke franchises zoals Super Mario en The Legend of Zelda naar een nieuw niveau werden getild.",
  },
  {
    year: 1994,
    event: "Lancering van de Sony PlayStation",
    details:
      "De lancering van de Sony PlayStation markeerde de eerste stap van Sony in de consolemarkt en bracht 3D-gaming naar het grote publiek. Het werd al snel een van de meest succesvolle consoles aller tijden en vestigde Sony als een belangrijke speler in de industrie.",
  },
  {
    year: 1996,
    event: "Introductie van de Nintendo 64",
    details:
      "De introductie van de Nintendo 64 bracht innovaties zoals 3D-gaming en analoge besturing naar de mainstream. Het introduceerde ook iconische games zoals Super Mario 64 en The Legend of Zelda: Ocarina of Time.",
  },
  {
    year: 2000,
    event: "Lancering van de PlayStation 2",
    details:
      "De PlayStation 2 wordt beschouwd als een van de meest succesvolle consoles ooit uitgebracht. Met zijn krachtige hardware, DVD-afspeelmogelijkheden en uitgebreide gamebibliotheek, zette het de standaard voor de zesde generatie consoles.",
  },
  {
    year: 2001,
    event: "Lancering van de Xbox",
    details:
      "De lancering van de Xbox markeerde Microsoft's intrede in de consolemarkt en bracht online gaming naar de voorgrond met Xbox Live. Het introduceerde ook franchises zoals Halo, die al snel iconisch werden.",
  },
  {
    year: 2004,
    event: "Introductie van de Nintendo DS",
    details:
      "De introductie van de Nintendo DS betekende een revolutie in handheld gaming met zijn dual-screen en touchscreen-functionaliteit. Het opende de deur voor nieuwe vormen van gameplay en interactie.",
  },
  {
    year: 2005,
    event: "Lancering van de Xbox 360",
    details:
      "De lancering van de Xbox 360 bracht HD-gaming en online diensten naar een hoger niveau. Het werd een pionier in online gaming en introduceerde functies zoals Achievements en Xbox Live Marketplace.",
  },
  {
    year: 2006,
    event: "Lancering van de PlayStation 3",
    details:
      "De lancering van de PlayStation 3 bracht Blu-ray-afspeelmogelijkheden en geavanceerde grafische mogelijkheden naar de consolemarkt. Het introduceerde ook bewegingsgevoelige gaming met de PlayStation Move-controller.",
  },
  {
    year: 2006,
    event: "Introductie van de Wii",
    details:
      "De introductie van de Wii zorgde voor een revolutie in gaming met zijn innovatieve motion-control bediening. Het richtte zich op een breder publiek en introduceerde nieuwe vormen van sociale en familiegerichte gameplay.",
  },
  {
    year: 2013,
    event: "Lancering van de PlayStation 4",
    details:
      "De lancering van de PlayStation 4 zette de trend voort van high-definition gaming en introduceerde sociale integratie en streamingmogelijkheden. Het werd al snel een van de best verkochte consoles van zijn generatie.",
  },
  {
    year: 2013,
    event: "Lancering van de Xbox One",
    details:
      "De lancering van de Xbox One bracht multimedia-integratie en cloud gaming naar de consolemarkt. Het richtte zich op een geïntegreerde entertainmentervaring en introduceerde functies zoals Kinect 2.0.",
  },
  {
    year: 2017,
    event: "Lancering van de Nintendo Switch",
    details:
      "De lancering van de Nintendo Switch bracht hybride gaming naar de mainstream, waardoor spelers naadloos konden schakelen tussen handheld en thuisconsole-modi. Het werd een enorm succes en introduceerde nieuwe franchises zoals Animal Crossing: New Horizons.",
  },
  {
    year: 2020,
    event: "Lancering van de PlayStation 5",
    details:
      "De lancering van de PlayStation 5 bracht next-gen gaming naar een hoger niveau met zijn krachtige hardware en geavanceerde functies zoals ray tracing en haptische feedback. Het werd een van de meest gewilde consoles van zijn generatie.",
  },
  {
    year: 2020,
    event: "Lancering van de Xbox Series X en Series S",
    details:
      "De lancering van de Xbox Series X en Series S markeerde Microsoft's nieuwste generatie consoles, met verbeterde prestaties en snellere laadtijden. Het bood spelers ook een keuze tussen high-end en betaalbare opties.",
  },
];

// Functie om de tijdlijn te vullen met de gebeurtenissen
function fillTimeline() {
  const timelineContainer = document.getElementById("timeline-container");
  timelineEvents.forEach((event) => {
    const eventElement = document.createElement("div");
    eventElement.classList.add("timeline-event");
    eventElement.innerHTML = `<span class="year">${event.year}</span><span class="event">${event.event}</span>`;
    eventElement.addEventListener("click", () => {
      displayPopup(event.year, event.event, event.details);
    });
    timelineContainer.appendChild(eventElement);
  });
}

// Functie om een pop-up weer te geven met alle informatie
function displayPopup(year, event, details) {
  const popupContainer = document.getElementById("popup-container");
  popupContainer.innerHTML = `
      <div class="popup">
        <h3>${year}</h3>
        <p><strong>Gebeurtenis:</strong> ${event}</p>
        <p><strong>Details:</strong> ${details}</p>
        <button id="closePopup">Sluiten</button>
      </div>
    `;

  // Voeg een eventlistener toe aan de sluitknop van de popup
  const closePopupButton = document.getElementById("closePopup");
  closePopupButton.addEventListener("click", closePopup);

  // Voeg de 'active' klasse toe aan de popup-container om deze weer te geven
  popupContainer.classList.add("active");
}

// Functie om de popup te sluiten
function closePopup() {
  const popupContainer = document.getElementById("popup-container");
  popupContainer.innerHTML = ""; // Verwijder de popup-inhoud
  // Verwijder de 'active' klasse om de popup-container te verbergen
  popupContainer.classList.remove("active");
}

// Voer de functie uit om de tijdlijn te vullen wanneer de pagina is geladen
window.addEventListener("load", function () {
  fillTimeline();
});
