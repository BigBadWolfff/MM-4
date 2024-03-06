// Array waar alle consoles in komen te staan
var consoles = [];

// Console object
var console = {};
consoles.push(console);

// game console 1
console = {
  naam: "Xbox Classic",
  uitgebrachtdatum: "15 november 2001",
  fabrikant: "Microsoft",
  afbeelding: "../img/xbox1.png",
  beschrijving:
    "De originele Xbox, ook wel bekend als de Xbox Classic of Xbox One, is de eerste console van Microsoft en werd uitgebracht in 2001. Het kenmerkt zich door zijn krachtige hardware, met ondersteuning voor high-definition graphics en online gaming.",
  prijs: 299,
  specificaties: {
    CPU: "733 MHz Intel Pentium III Custom CPU",
    GPU: "233 MHz Custom NVIDIA GeForce 3",
    geheugen: "64 MB DDR SDRAM",
    opslagcapaciteit: "8 GB HDD"
  },
  beschikbareKleuren: ["Groen"],
  accessoires: ["Controller", "Memory Card", "Headset"],
  games: ["Halo: Combat Evolved", "Fable", "Forza Motorsport"]
};
consoles.push(console);

// game console 2
console = {
  naam: "Nintendo 64",
  uitgebrachtdatum: "15 november 2001",
  fabrikant: "Nintendo",
  afbeelding: "../img/nintendo64.png",
  beschrijving:
    "De Nintendo 64, uitgebracht op 15 november 2001, is een iconische gameconsole die bekend staat om zijn baanbrekende 3D-graphics en innovatieve controller, de Nintendo 64-controller met zijn unieke driehoekige vorm en joystick. Deze console introduceerde vele klassieke games zoals Super Mario 64, The Legend of Zelda: Ocarina of Time en Mario Kart 64, die allemaal de tand des tijds hebben doorstaan en nog steeds worden beschouwd als meesterwerken in de gaminggeschiedenis.",
  prijs: 199, // fictieve prijs ter illustratie
  specificaties: {
    CPU: "64-bit NEC VR4300",
    GPU: "64-bit RCP (Reality Coprocessor)",
    geheugen: "4 MB Rambus RDRAM",
    opslagcapaciteit: "Cartridges"
  },
  beschikbareKleuren: ["Grijs"],
  accessoires: ["Nintendo 64-controller", "Expansion Pak", "Memory Card"],
  games: [
    "Super Mario 64",
    "The Legend of Zelda: Ocarina of Time",
    "Mario Kart 64"
  ]
};
consoles.push(console);

// game console 3
console = {
  naam: "PlayStation",
  uitgebrachtdatum: "3 december 1994",
  fabrikant: "Sony Interactive Entertainment",
  afbeelding: "../img/playstation.png",
  beschrijving:
    "De originele PlayStation, gelanceerd op 3 december 1994, was een revolutionaire gameconsole die de gamingwereld veranderde. Met zijn CD-ROM-drive bood de PlayStation verbeterde graphics en geluid, waardoor het een breed scala aan nieuwe gamingervaringen mogelijk maakte. Het platform werd al snel een enorm succes en legde de basis voor de moderne PlayStation-franchise.",
  prijs: 299, // fictieve prijs ter illustratie
  specificaties: {
    CPU: "MIPS R3000A RISC (32-bit)",
    GPU: "Custom GPU",
    geheugen: "2 MB RAM",
    opslagcapaciteit: "CD-ROM"
  },
  beschikbareKleuren: ["Grijs"],
  accessoires: ["DualShock-controller", "Memory Card", "Multitap"],
  games: ["Final Fantasy VII", "Gran Turismo", "Tekken 3"]
};
consoles.push(console);

// game console 4
console = {
  naam: "NES (Nintendo Entertainment System)",
  uitgebrachtdatum: "18 oktober 1985",
  fabrikant: "Nintendo",
  afbeelding: "../img/nes.png",
  beschrijving:
    "Het Nintendo Entertainment System (NES) wordt beschouwd als een iconische gameconsole die de videogame-industrie heeft gevormd. Het werd gelanceerd door Nintendo in 1985 en was verantwoordelijk voor het populariseren van thuisvideogames. Met klassiekers als Super Mario Bros., The Legend of Zelda en Metroid, heeft de NES een blijvende impact gehad op de gamingcultuur.",
  prijs: 199, // fictieve prijs ter illustratie
  specificaties: {
    CPU: "Ricoh 2A03 (8-bit)",
    GPU: "Ricoh 2C02 (Picture Processing Unit)",
    geheugen: "2 KB RAM",
    opslagcapaciteit: "ROM-cartridges"
  },
  beschikbareKleuren: ["Grijs"],
  accessoires: ["Controller", "Zapper Light Gun", "Power Glove"],
  games: ["Super Mario Bros.", "The Legend of Zelda", "Metroid"]
};
consoles.push(console);

// game console 5
console = {
  naam: "Sega Mega Drive",
  uitgebrachtdatum: "29 oktober 1988",
  fabrikant: "Sega",
  afbeelding: "../img/sega.png",
  beschrijving:
    "De Sega Mega Drive, ook bekend als de Sega Genesis in Noord-Amerika, is een 16-bit spelcomputer uit de jaren 90. Het was Sega's derde console en werd een van de meest succesvolle consoles uit die tijd. De Mega Drive introduceerde populaire franchises zoals Sonic the Hedgehog, Streets of Rage en Golden Axe.",
  prijs: 189,
  specificaties: {
    CPU: "Motorola 68000 16-bit processor",
    GPU: "Video Display Processor (VDP)",
    geheugen: "64 KB RAM, 64 KB VRAM",
    opslagcapaciteit: "Varieert (Vanaf 512 KB)"
  },
  beschikbareKleuren: ["Zwart"],
  accessoires: ["Controller", "MultiTap", "Sega CD"],
  games: ["Sonic the Hedgehog", "Streets of Rage", "Golden Axe"]
};

consoles.push(console);

// game console 6
console = {
  naam: "Xbox 360",
  uitgebrachtdatum: "22 november 2005",
  fabrikant: "Microsoft",
  afbeelding: "../img/xbox360.png",
  beschrijving:
    "De Xbox 360 is een thuisvideospelconsole ontwikkeld door Microsoft. Het is de opvolger van de originele Xbox en concurreerde met Sony's PlayStation 3 en Nintendo's Wii als onderdeel van de zevende generatie videogameconsoles. De Xbox 360 introduceerde veel nieuwe functies, waaronder een online gamingservice genaamd Xbox Live, waarmee spelers online konden spelen, games konden downloaden en toegang hadden tot streaming media. Het was ook de eerste console die de Kinect-bewegingssensor introduceerde.",
  prijs: 299,
  specificaties: {
    CPU: "3.2 GHz PowerPC Tri-Core Xenon",
    GPU: "500 MHz ATI Xenos",
    geheugen: "512 MB GDDR3 RAM",
    opslagcapaciteit: "Varieert (4 GB, 20 GB, 60 GB, 120 GB, 250 GB)"
  },
  beschikbareKleuren: ["Zwart", "Wit", "Grijs", "Rood"],
  accessoires: ["Controller", "Kinect", "Headset", "Hard Drive"],
  games: ["Halo 3", "Gears of War", "Mass Effect"]
};

consoles.push(console);
