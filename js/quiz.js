const questions = [
  {
    question: "Wie heeft Pong uitgebracht?",
    options: ["Nintendo", "Atari", "Sega", "Sony"],
    answer: "Atari",
  },
  {
    question: "Welke console werd in 1977 gelanceerd?",
    options: [
      "Atari 2600",
      "Nintendo Entertainment System",
      "PlayStation",
      "Xbox",
    ],
    answer: "Atari 2600",
  },
  {
    question: "Wie is de maker van Super Mario Bros.?",
    options: ["Sega", "Atari", "Nintendo", "Sony"],
    answer: "Nintendo",
  },
  {
    question: "Welk bedrijf heeft Sonic the Hedgehog ontwikkeld?",
    options: ["Nintendo", "Sega", "Atari", "Sony"],
    answer: "Sega",
  },
  {
    question: "Welke game werd geleverd bij de lancering van de NES?",
    options: ["Super Mario Bros.", "The Legend of Zelda", "Pac-Man", "Tetris"],
    answer: "Super Mario Bros.",
  },
  {
    question: "Wie is de hoofdpersoon in The Legend of Zelda-serie?",
    options: ["Link", "Mario", "Luigi", "Bowser"],
    answer: "Link",
  },
  {
    question: "Welke game wordt beschouwd als de eerste RPG?",
    options: [
      "Final Fantasy",
      "The Legend of Zelda",
      "Dragon Quest",
      "Pac-Man",
    ],
    answer: "Dragon Quest",
  },
  {
    question: "Wat betekent 'NES'?",
    options: [
      "Nintendo Entertainment System",
      "New Entertainment System",
      "National Entertainment System",
      "Nerdy Electronic System",
    ],
    answer: "Nintendo Entertainment System",
  },
  {
    question: "Welke gameconsole heeft een controller met een trackball?",
    options: ["Atari 2600", "Intellivision", "Sega Genesis", "Atari Jaguar"],
    answer: "Intellivision",
  },
  {
    question: "Wat was de eerste 16-bits gameconsole?",
    options: [
      "Sega Genesis",
      "Super Nintendo Entertainment System",
      "TurboGrafx-16",
      "Neo Geo",
    ],
    answer: "TurboGrafx-16",
  },
  {
    question: "Wie heeft Pong uitgebracht?",
    options: ["Nintendo", "Atari", "Sega", "Sony"],
    answer: "Atari",
  },
  {
    question: "Welke console werd in 1977 gelanceerd?",
    options: [
      "Atari 2600",
      "Nintendo Entertainment System",
      "PlayStation",
      "Xbox",
    ],
    answer: "Atari 2600",
  },
  {
    question: "Wie is de maker van Super Mario Bros.?",
    options: ["Sega", "Atari", "Nintendo", "Sony"],
    answer: "Nintendo",
  },
  {
    question: "Welk bedrijf heeft Sonic the Hedgehog ontwikkeld?",
    options: ["Nintendo", "Sega", "Atari", "Sony"],
    answer: "Sega",
  },
  {
    question: "Welke game werd geleverd bij de lancering van de NES?",
    options: ["Super Mario Bros.", "The Legend of Zelda", "Pac-Man", "Tetris"],
    answer: "Super Mario Bros.",
  },
  {
    question: "Wie is de hoofdpersoon in The Legend of Zelda-serie?",
    options: ["Link", "Mario", "Luigi", "Bowser"],
    answer: "Link",
  },
  {
    question: "Welke game wordt beschouwd als de eerste RPG?",
    options: [
      "Final Fantasy",
      "The Legend of Zelda",
      "Dragon Quest",
      "Pac-Man",
    ],
    answer: "Dragon Quest",
  },
  {
    question: "Wat betekent 'NES'?",
    options: [
      "Nintendo Entertainment System",
      "New Entertainment System",
      "National Entertainment System",
      "Nerdy Electronic System",
    ],
    answer: "Nintendo Entertainment System",
  },
  {
    question: "Welke gameconsole heeft een controller met een trackball?",
    options: ["Atari 2600", "Intellivision", "Sega Genesis", "Atari Jaguar"],
    answer: "Intellivision",
  },
  {
    question: "Wat was de eerste 16-bits gameconsole?",
    options: [
      "Sega Genesis",
      "Super Nintendo Entertainment System",
      "TurboGrafx-16",
      "Neo Geo",
    ],
    answer: "TurboGrafx-16",
  },
  {
    question: "Welke game introduceerde het concept van 'power-ups'?",
    options: ["Super Mario Bros.", "Pac-Man", "Donkey Kong", "Space Invaders"],
    answer: "Super Mario Bros.",
  },
  {
    question:
      "Welke game wordt vaak beschouwd als de eerste first-person shooter?",
    options: ["Wolfenstein 3D", "Doom", "Quake", "Half-Life"],
    answer: "Wolfenstein 3D",
  },
  {
    question: "Wie is de maker van de game Donkey Kong?",
    options: ["Shigeru Miyamoto", "Hideo Kojima", "Yuji Naka", "John Romero"],
    answer: "Shigeru Miyamoto",
  },
  {
    question: "Welke game wordt vaak beschouwd als de eerste open-wereld game?",
    options: [
      "The Legend of Zelda",
      "Grand Theft Auto III",
      "Minecraft",
      "The Elder Scrolls: Arena",
    ],
    answer: "The Legend of Zelda",
  },
  {
    question: "Welke console introduceerde de 'rumble' functie in controllers?",
    options: ["Nintendo 64", "PlayStation", "Sega Dreamcast", "Xbox"],
    answer: "Nintendo 64",
  },
  {
    question: "Welk spel werd gebundeld met de lancering van de Xbox?",
    options: [
      "Halo: Combat Evolved",
      "Fable",
      "Halo 2",
      "Project Gotham Racing",
    ],
    answer: "Halo: Combat Evolved",
  },
  {
    question: "Welk jaar werd de eerste The Sims-game uitgebracht?",
    options: ["2000", "2002", "2004", "2006"],
    answer: "2000",
  },
  {
    question: "Welke game introduceerde de 'bullet time' mechaniek?",
    options: ["Max Payne", "Metal Gear Solid", "Resident Evil", "Tomb Raider"],
    answer: "Max Payne",
  },
  {
    question: "Welke console introduceerde de draadloze controller?",
    options: ["PlayStation 2", "Xbox", "Nintendo GameCube", "PlayStation 3"],
    answer: "Nintendo GameCube",
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const correctSound = new Audio("../media/audio/answer.mp3");
const wrongSound = new Audio("../media/audio/invalid.mp3");

function displayQuestion() {
  const currentQuestionData = questions[currentQuestion];
  questionElement.textContent = currentQuestionData.question;
  optionsElement.innerHTML = "";
  selectedOption = null;

  currentQuestionData.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.addEventListener("click", () => {
      checkAnswer(option);
    });
    optionsElement.appendChild(optionButton);
  });
}

function checkAnswer(option) {
  const currentQuestionData = questions[currentQuestion];
  if (option === currentQuestionData.answer) {
    score++;
    updateScore();
    resultElement.textContent = "Goed antwoord!";
    correctSound.play();
  } else {
    resultElement.textContent = "Fout antwoord!";
    wrongSound.play();
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = "";
  optionsElement.innerHTML = "";
  resultElement.textContent = `Je score is ${score} van de ${questions.length} vragen.`;
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = `Score: ${score}`;
}

window.addEventListener("load", displayQuestion);
