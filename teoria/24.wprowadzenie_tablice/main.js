// listy są uporządkowane(ważna jest kolejność)

//TWORZENIE TABLICY

const nameList = ["Ludomir", "Żyrosław", "Gniewomir", "Myślimir"];

const cityList = [];
cityList[0] = "Leżajsk";
cityList[1] = "Rzeszów";

//konstruktor
const items = [];
const gameItems = new Array();
const colors = new Array("red", "blue");
colors[2] = "green";

const myArrayConst = [];
let myArrayLet = [];

myArrayConst[0] = "pierwszy const";
myArrayLet[0] = "pierwszy let";
// myArrayConst = "coś inndego";
// myArrayLet = "coś innego";

// CO MOŻE ZWIERAĆ TABLICA
const differentValues = ["string", 20, {}, ["jeden", "dwa"], null];

// ODWOŁANIE DO ELEM TABLICY
const popularName = nameList[2];
nameList[3] = "Witomysł";
nameList[2] === "Gniewomir";

// TWORZENIE NOWYCH ELEMENTÓW I MODYFIKACJA
nameList[4] = "Nowe imie";

// usuwanie elem tablicy
delete nameList[2]; // delete nie skraca tablicy
typeof nameList[2]; // undefined

// Długość tablicy
const cities = ["Poznać", "Gdynia", "Kraków"];
cities.length;

const users = [];
users.length;

// WYKORZYSTANIE DŁUGOŚCI TABLICY
const longArray = [];
longArray.length = 100;

// odwołanie się do ostaniego elementy tablict
cities[cities.length - 1];

// dodanie kolejnego elementu na końcu
cities[cities.length] = "Tokio";
cities[cities.length] = "Pekin";

// POWIĘKSZANIE, ZMIENJSZANIE, WYZEROWANIE TABLICY
users.length = 20;
cities.length += 2;
cities.length = 3;
users.length = 0; // tabica pusta

// SPRAWDZANIE CZY TO TABLICA
typeof users;
cities instanceof String;
cities instanceof Array;
cities instanceof Object;

Array.isArray(cities);

// dereferencja obikety
let letters = ["a", "d"];
let characters = letters; // ta sama tablica, obie zmienne mają tylko referencje

// tablica zostanie usunięta jeśli nie ma do niej referencji
letters = null;
characters = null;
// lub
letters = characters = null;

// stworzeni wiele zmiennych w oparciu o zawartoś tablicy
const [nameUser, idUser, aheUser] = ["Sławoj", 210, 54];

const game = [120.12, 65, "dobryggg"];
let [time, points, name] = game;
