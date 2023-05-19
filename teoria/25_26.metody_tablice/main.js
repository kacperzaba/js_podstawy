const italianUsers = [
  "Giovanni",
  "Michele",
  "Anegelo",
  "Luigi",
  "Valentina",
  "Marco",
];

// PUSH - dodaj elem na koniec
//italianUsers.push("Alessandra");

// UNSHIFT - dodaj elem na początek
// italianUsers.unshift("Tommaso");

// POP - usun elem na końcu
// italianUsers.pop();
// const invitedUser = italianUsers.pop(); // usuwa z indeksem

// delete italianUsers[italianUsers.length - 1];

// SHIFt usuń pierwszy elem i indeks tablict
// italianUsers.shift();

// CO ZWRACAJĄ METODY

// const removedLastElement = italianUsers.pop();

// const removedFirstElement = italianUsers.shift();

// const lengthArrayAfterPush = italianUsers.push("Vito"); // metoda zwraca długość tablicy po wykonaniu
// const lengthArrayAfterUnshift = italianUsers.unshift("Apollonia"); // zwraca długośc po dodaniu

// METODA CONCAT
// łączeni tablic, czyli tworzy nową
const redColors = ["czerwony", "zachodzącego slonca", "krwisty"];
const greenColors = ["zielony", "trawiasty", "zielony banan"];

const redAndGreenColors = redColors.concat(greenColors);

const redBlueGreenColors = redColors.concat(greenColors, ["morski"]);

// operator spread
const colorsCollections = [...redColors, ...greenColors]; // ... rozbiera tablicę na części

const colorsCollections2 = [...redColors, ...greenColors, "morski"];
