let ptObj = {
  1: ["H", "Hydrogen"],
  2: ["He", "Helium"],
  3: ["Li", "Lithium"],
  4: ["Be", "Beryllium"],
  5: ["B", "Boron"],
  6: ["C", "Carbon"],
  7: ["N", "Nitrogen"],
  8: ["O", "Oxygen"],
  9: ["F", "Flourine"],
  10: ["Ne", "Neon"],
  11: ["Na", "Sodium"],
  12: ["Mg", "Magnesium"],
  13: ["Al", "Aluminum"],
  14: ["Si", "Silicon"],
  15: ["P", "Phosphorus"],
  16: ["S", "Sulfur"],
  17: ["Cl", "Chlorine"],
  18: ["Ar", "Argon"],
  19: ["K", "Potassium"],
  20: ["Ca", "Calcium"],
  21: ["Sc", "Scandium"],
  22: ["Ti", "Titanium"],
  23: ["V", "Vanadium"],
  24: ["Cr", "Chromium"],
  25: ["Mn", "Manganese"],
  26: ["Fe", "Iron"],
  27: ["Co", "Cobalt"],
  28: ["Ni", "Nickle"],
  29: ["Cu", "Copper"],
  30: ["Zn", "Zinc"],
  31: ["Ga", "Gallium"],
  32: ["Ge", "Germanium"],
  33: ["As", "Arsenic"],
  34: ["Se", "Selenium"],
  35: ["Br", "Bromine"],
  36: ["Kr", "Krypton"],
  37: ["Rb", "Rubidium"],
  38: ["Sr", "Strontium"],
  39: ["Y", "Yttrium"],
  40: ["Zr", "Zirconium"],
  41: ["Nb", "Niobium"],
  42: ["Mo", "Molybdenum"],
  43: ["Tc", "Technetium"],
  44: ["Ru", "Ruthenium"],
  45: ["Rh", "Rhodium"],
  46: ["Pd", "Palladium"],
  47: ["Ag", "Silver"],
  48: ["Cd", "Cadmium"],
  49: ["In", "Indium"],
  50: ["Sn", "Tin"],
  51: ["Sb", "Antimony"],
  52: ["Te", "Tellurium"],
  53: ["I", "Iodine"],
  54: ["Xe", "Xenon"],
  55: ["Cs", "Cesium"],
  56: ["Ba", "Barium"],
  57: ["La", "Lanthanum"],
  58: ["Ce", "Cerium"],
  59: ["Pr", "Praseodynium"],
  60: ["Nd", "Neodynium"],
  61: ["Pm", "Promethium"],
  62: ["Sm", "Samarium"],
  63: ["Eu", "Europium"],
  64: ["Gd", "Galolinium"],
  65: ["Tb", "Terbium"],
  66: ["Dy", "Dysprosium"],
  67: ["Ho", "Holmium"],
  68: ["Er", "Erbium"],
  69: ["Tm", "Thulium"],
  70: ["Yb", "Ytterbium"],
  71: ["Lu", "Lutetium"],
  72: ["Hf", "Hafnium"],
  73: ["Ta", "Tantalum"],
  74: ["W", "Tungsten"],
  75: ["Re", "Rhenium"],
  76: ["Os", "Osmium"],
  77: ["Ir", "Iridium"],
  78: ["Pt", "Platinum"],
  79: ["Au", "Gold"],
  80: ["Hg", "Mercury"],
  81: ["Tl", "Thallium"],
  82: ["Pb", "Lead"],
  83: ["Bi", "Bismuth"],
  84: ["Po", "Polonium"],
  85: ["At", "Astatine"],
  86: ["Rn", "Radon"],
  87: ["Fr", "Francium"],
  88: ["Ra", "Radium"],
  89: ["Ac", "Actinium"],
  90: ["Th", "Thorium"],
  91: ["Pa", "Protactinium"],
  92: ["U", "Uranium"],
  93: ["Np", "Neptunium"],
  94: ["Pu", "Plutonium"],
  95: ["Am", "Americium"],
  96: ["Cm", "Curium"],
  97: ["Bk", "Berkelium"],
  98: ["Cf", "Californium"],
  99: ["Es", "Einsteinium"],
  100: ["Fm", "Fermium"],
  101: ["Md", "Mendelevium"],
  102: ["No", "Nobelium"],
  103: ["Lr", "Lawrencium"],
  104: ["Rf", "Rutherfordium"],
  105: ["Db", "Dubnium"],
  106: ["Sg", "Seaborgium"],
  107: ["Bh", "Bohrium"],
  108: ["Hs", "Hassium"],
  109: ["Mt", "Meitnerium"],
  110: ["Ds", "Darmstadtium"],
  111: ["Rg", "Roentgenium"],
  112: ["Cn", "Copernicium"],
  113: ["Nh", "Nihonium"],
  114: ["Fl", "Flerovium"],
  115: ["Mc", "Moscovium"],
  116: ["Lv", "Livermorium"],
  117: ["Ts", "Tennessine"],
  118: ["Og", "Oganesson"],
};

function generateWinningNumber() {
  return Math.ceil(Math.random() * 118);
}

function shuffle(array) {
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

class Game {
  constructor() {
    this.playersGuess = null;
    this.pastGuesses = [];
    this.winningNumber = generateWinningNumber();
  }

  difference() {
    return Math.abs(this.playersGuess - this.winningNumber);
  }

  isLower() {
    return this.playersGuess < this.winningNumber ? true : false;
  }

  playersGuessSubmission(num) {
    if (num < 1 || num > 100 || typeof num !== "number") {
      throw "That is an invalid guess.";
    } else {
      this.playersGuess = num;
      return this.checkGuess(num);
    }
  }

  checkGuess(num) {
    if (this.playersGuess === this.winningNumber) {
      this.pastGuesses.push(num);
      return "You Win!";
    } else if (this.pastGuesses.includes(num)) {
      return "You have already guessed that number.";
    } else {
      this.pastGuesses.push(num);
      if (this.pastGuesses.length >= 5) {
        return "You Lose.";
      } else {
        if (this.difference() < 10) {
          return "You're burning up!";
        } else if (this.difference() < 25) {
          return "You're lukewarm.";
        } else if (this.difference() < 50) {
          return "You're a bit chilly.";
        } else {
          return "You're ice cold!";
        }
      }
    }
  }

  provideHint() {
    let randomNum1 = generateWinningNumber();
    let randomNum2 = generateWinningNumber();

    let hintArr = [this.winningNumber, randomNum1, randomNum2];
    return shuffle(hintArr);
  }
}

class PtGame extends Game {
  constructor() {
    super();
    this.testResults = [];
  }

  playersGuessSubmission(num) {
    if (num < 1 || num > 118 || isNaN(num)) {
      return "That is an invalid atomic number.";
    } else {
      this.playersGuess = num;
      return this.checkGuess(num);
    }
  }

  checkGuess(num) {
    let feedback = "";
    if (this.playersGuess === this.winningNumber) {
      this.pastGuesses.push(num);
      feedback = "Eureka! You've identified the unknown element!";
    } else if (this.pastGuesses.includes(num)) {
      feedback = "You have already tested that element.";
    } else {
      this.pastGuesses.push(num);

      if (this.difference() < 10) {
        this.testResults.push("#f17777");
        feedback = "You're burning up!";
      } else if (this.difference() < 25) {
        this.testResults.push("#f9c8c8");
        feedback = "You're lukewarm!";
      } else if (this.difference() < 50) {
        this.testResults.push("#78c1f9");
        feedback = "You're a bit chilly!";
      } else {
        this.testResults.push("#1e98f6");
        feedback = "You're ice cold!";
      }
    }

    if (this.pastGuesses.length >= 5) {
      feedback = "Oh no, you're out of tests! Play again!";
    }
    return feedback;
  }
}

function newGame() {
  return new PtGame();
}

function playGame() {
  let game = newGame();
  document.getElementById("textBox").value = "";
  let submitButton = document.getElementById("submit");
  let hintButton = document.getElementById("hint");
  let resetButton = document.getElementById("reset");

  submitButton.addEventListener("click", () => {
    playersGuess = +document.getElementById("textBox").value;
    document.getElementById("textBox").value = "";

    document.getElementById("message").innerHTML = game.playersGuessSubmission(
      playersGuess
    );

    if (
      document.getElementById("message").innerHTML ===
        "Oh no, you're out of tests! Play again!" ||
      document.getElementById("message").innerHTML ===
        "Eureka! You've identified the unknown element!"
    ) {
      document.getElementById("submit").style.display = "none";
      document.getElementById("reset").style.display = "inline";
      document.getElementById("textBox").style.display = "none";
      document.getElementById("hint").style.display = "none";
    }

    let currGuess = game.pastGuesses[game.pastGuesses.length - 1];
    document.getElementById("number").innerHTML = currGuess;
    document.getElementById("symbol").innerHTML = ptObj[currGuess][0];
    document.getElementById("name").innerHTML = ptObj[currGuess][1];

    let currTestResult = game.testResults[game.testResults.length - 1];
    document.getElementById("largeTile").style.backgroundColor = currTestResult;

    game.pastGuesses.forEach((guess, i) => {
      document.getElementById(`t${i}Num`).innerHTML = guess;
      document.getElementById(`t${i}Symbol`).innerHTML = ptObj[guess][0];
    });

    game.testResults.forEach((result, i) => {
      document.getElementById(`t${i}`).style.backgroundColor = result;
    });
  });

  hintButton.addEventListener("click", () => {
    hintArr = game.provideHint();
    document.getElementById(
      "message"
    ).innerHTML = `One of these is correct atomic number! ${hintArr[0]}, ${hintArr[1]}, ${hintArr[2]}`;
  });

  resetButton.addEventListener("click", () => {
    document.location.reload();
  });
}
playGame();
