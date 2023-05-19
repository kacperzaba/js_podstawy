// OBIEKTY - WPROWADZENIE

// Obiekt - nieuporządkowana lista właściowści złożonych z nazwy (klucza) i wartości (para key - value).

// TWORZENIE OBIEKTÓW
// operatot new i konstruktot obiektu (funkcja)

// 1 - tworzymy obiekt
const cat = new Object();

// 2 - przypisujemy mu warotści
cat.name = "Gacek";
cat["age"] = 2;
cat.meow = function () {
  console.log("miau miau");
};

// literał obiektu - {} - efekt jest taki sam co przy konstrucktorze

// 1 - towrzymy obiekt i od razu przypisujemy właściwość
const dog = {
  name: "Fafik",
  age: 9,
  "eye color": "black",
  barking: function () {
    console.log("hau hau");
  },
  squeaking() {
    console.log("aaaa uuuu eeee");
  },
};
dog.childrens = ["bobik", "jagódka"];

// USUWANIE
delete dog.childrens;

// Przykład 1
// Odwołanie do obiektu w innej funkcji

let value = 5;
const result = {
  value: 1,
};

function plus() {
  value++;
  result.value++;
  return "dodane";
}

// Przykład 2
// Odwołanie do obiektu w metodzie (this)

const counter = {
  score: 0,
  increment: function () {
    // counter.score++ tak nie piszemy bo możemy używać this
    this.score++;
    console.log(counter.score);
  },
};
