const items = ["zad", "bza", "wus", "xad", "coe", "mer", "tve"];

// METODA SLICE - zwraca nową tablicę, składającą się z wybrancych elementów
items.slice(3); // wycina od 3 do końca
const theSameItems = items.slice(0);
items.slice(2, 3); // wycina elementy od 2 do 3 indeksu, ale bez 3
items.slice(-3); // wycina 3 elem od końca
const newItems = items.slice(0, 3);

// METODA SPLICE - metoda destrukcujna, usuwa elementy, zwaraca usunięte elem
const animals = ["dog", "cat", "canary", "mouse"];
// animals.splice(1, 2); // 1 - indeks od którego chcemy usuwać, 2 - ile elem usunąć

// animals.splice(2); // usunie wszystkie elem od indeksu 2 do końca
// animals.splice(0); // wyzeruje całą tablice

// Metoda splcice umożliwia też zastąpienie usuniętych elem
// animals.splice(3, 1, "hamster");
// animals.splice(0, 2, "fishes", "snake");
// animals.splice(0, 1, "elephant", "spider");

// animals.splice(0, 1, "fishes", "snake");
// MOŻLIWE JEST TEŻ DODANIE ELEM BEZ USUWANIA
// animals.splice(2, 0, "rat");
// animals.splice(0, 0, "horse", "pig", "donkey");
// animals.unshift("parrot");
// const pets = animals.splice(0, 3);

// METODA SORT
// metoda destrukcyjna
// zmienia tablice
// ["Marek", "Zenek", "Arek"].sort();
// animals.sort();
// items.sort();

// METODA INDEXOF
animals.indexOf("cat");
["Arek", 22, null, 22].lastIndexOf(22);
["Arek", 22, null, 22].indexOf(22);
["Arek", 22, null, 22].indexOf("Are"); // -1

// METODA INCLUDES
animals.includes("mouse");

// METODA JOIN
// towrzy stringa z elem tablicy, domyślnie oddzielonych "," ale można to zmienić
// items.join();
// items.join("------");// wstawi ----- pomiędzy
// items.join("- co to jest?\n");

// METODA REVERSE
// metoda destrukcujna
// odwraca kolejność
animals.reverse();
["A", 3, "z", "koniec"].reverse();

// METODA SPLIT
const letters = "Marek Adam Justyna Teresa".split("");
"Marek Adam Justyna Teresa".split(" ");
"Gdańsk, Elbląg, Gdynia".split(", ");
"Gdańsk, Elbląg, Gdynia".split(", ", 1); // 1 - ogranicza ile ma być elem
