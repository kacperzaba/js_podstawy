const userName = "Tomasz Niewierny";
const secondLetter = userName[1];

const objUserName = new String(userName);

const emptyString = "";
const emptyObjectString = new Object("");

// METODY DLA TYPU STRING
userName.toUpperCase();
userName.toLowerCase();

// WŁAŚCIWOŚCI
userName.length;
userName["length"];

// pobieranie konkretnego znaku
userName.charAt(3);
userName[3];
//userName['3']

// łączenie stringów
userName.concat("- fajne imie");
userName + " gałgan bez szkoły";
`${userName} - fajne imie`;

// jaki indeks ma znak i czy występuje
userName.indexOf("m");
userName.indexOf("omasz");
userName.indexOf("e");
userName.lastIndexOf("e"); // to samo ale od końca

// czy dany element jest w stringu
userName.includes("o");

// pozbądź się białych znaków
const afterTrim = "    słowo    ".trim();

// skopiuj string
const repeatString = "word".repeat(200);

// zwróć fragment
const slideWord = userName.slice(1, 5); // bez 5

// cudzysłów wewnątrz stringa
const singleQuoteExample = "i'm Magda";
const singleQuoteExample2 = 'i"m Magda';

const slash = "ktos\\cos";
const newLine = "ktos \n cos";

const superText = `tekst
tekst w nowej linii i 
cudzysłów"`;

// konwersja na stringa
String(23132131331231);
// druga metoda
(2000).toString();
// można też wskazać system
(2000).toString(2);

// niejawan konwersja
"" + 200; // "200"
"" + true; // "true"

// pusty string jest falsem pozostałe true
Boolean(""); // false
Boolean("gag"); // true
