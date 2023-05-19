const condition = 2;
if (condition) {
  console.log("warunek jest prawdziwy");
}

// kod w bloku jest uruchomiony tylko gdy warunek jest prawdziwy, w przeciwnym przypadku kod jest pomijany

const userName = "Kacper";

if (userName) {
  console.log("Witaj " + userName);
}

if (userName !== "") {
  console.log("Witaj " + userName);
}

// instrukcja z else
const hasTicket = false;
const moreThen15Years = true;
const bossFamily = true;

if ((hasTicket && moreThen15Years) || bossFamily) {
  console.log("możesz wejść");
} else {
  console.log("przykro mi");
}
// else wykonuje się tylko gdy pierwszy warunek jest nie prawdą, w innym przpadku blok else jest pomijany

// instrukacja else if

const age = null;

if (age <= 9 && typeof age === "number") {
  console.log("jesteś jeszcze dzieckiem");
} else if (age <= 18 && typeof age === "number") {
  console.log("jesteś młodzieżą");
} else if (age <= 70 && typeof age === "number") {
  console.log("cały świat przed tobą");
} else {
  console.log(
    "jestes dojrzałym człowiekirm i doceniasz zalety tego wieku lib nie mogę ustalić twojego wieku"
  );
}

// zagnieżdżone if
const guestName = "";
const guestAge = 12;
if (guestName) {
  if (guestAge >= 18) {
    console.log("Witaj w klubie " + guestName);
  } else {
    console.log("no niestety " + guestName);
  }
} else {
  console.log("nie wiem jak masz na imię więc nie wejdziesz");
}

// INSTRUKCJA WARUNKOWA SWITCH (drzewko możliwośći)
const dayOfTheWeek = "środa";

// jako argument podajemy wartość, którą będziemy porównywać
switch (dayOfTheWeek) {
  case "poniedziałek": // po case podajemy wartość do porównania z argumentem instrukcji
    console.log("dzieś poniedziałek");
    break; // break kończy działanie instrukcji gdzy program w nią wejdzie
  case "wtorek":
    console.log("dziś wtorek");
    break;
  case "środa":
    console.log("dziś środa");
    break;
  default:
    console.log("nie mam pojęcia co to za dzień");
    break;
}

// OPERATOR WARUNKOWY
const score = 100;
20 == "20" && score
  ? console.log("wykonuje się bo prawda")
  : console.log("wykonuje się bo nie prawda");

true || false ? console.log("prawda") : console.log("fałsz");

// console.log(1 > 10 ? 1 : 0);
let gameResults = 0;
let killedMonsters = 11;
gameResults += killedMonsters > 10 ? 1 : 0;

const playerName = "Mściwoj";
console.log(`Witaj ${playerName ? playerName : "nieznajomy wojowniku"}`);
