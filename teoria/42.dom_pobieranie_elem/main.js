// reprezantacja dokumentu html w przegladardce

// POBIRANIE ELEM ZA STRONY
document.documentElement; // odwołanie do html
document.body; // odwołanie do body
document.images;

// Łatwo zrobić z tego tablicę
const imgs = Array.from(document.images);

// Metody pobierające jeden elem
document.querySelector("li:nth-child(2)"); // jak selektor CSS, pokazuje tylko pierwszy elem
const firstElem = document.getElementById("first"); // jako argument podajemy identyfikator

// Metody pobierające wszystkie pasujące elemtnty
document.querySelector("ul>li"); // nodeLIst - lista węzłów ( tablico podobny obiekt)
document.getElementsByTagName("li"); // HTMLCollection ( tablico podobny obiekt)
document.getElementsByClassName("even");

// pseudo tablice można łatwo zamienić na tablicę np.

const liList = document.querySelectorAll("li");
const liArray = [...liList];

// Pobieranie atrybutów z elem
const h2 = document.querySelector("h2");
const h2Class = console.log(h2.getAttribute("class"));

const h2Text = h2.textContent; // pobiera tekst
const h2HTML = h2.innerHTML; // pobiera tekst z zagnieżdżonymi tagami
document.body.innerHTML;
document.body.textContent;

console.log(h2.classList); // przechowuje informacje na temat wszystkich klas w elemencie
h2.classList.contains("title"); // sprawdzamy czy ma daną klasę

