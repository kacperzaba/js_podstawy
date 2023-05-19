// Operator rest - wiele elementów podanych jako argumenty do jednej tablicy
// ...nazwa (dowolna zgodna z zasadami dla zmiennej)
// zwraca tablicę (arguments nie było tablicą)

function showAllArgumets(...args) {
  console.log(args);
  return args;
}

// showAllArgumets("losowos", 12, 34, "noc", 54);

function addAllWords(...words) {
  let txt = "";
  for (let i = 0; i < words.length; i++) {
    txt += `${words[i]} `;
  }
  console.log(txt);
}

function addAllWords2(...words) {
  let txt = "";
  // for (let i = 0; i < words.length; i++) {
  // txt += words[i] + " ";
  // }
  words.forEach((word) => (txt += word + " "));
  console.log(txt);
}

addAllWords();
addAllWords("Kacper", "Żaba");
addAllWords(12, "cos", 3222, "nic");
addAllWords2(12, "cos", 3222, "nic");
// dzięki parametrowi rest możemy zbierać pozostałe argumnety

function showUsers(owner, ...others) {
  console.log(
    `Na imprezie był ${owner} ${others.length ? "oraz " + others + "." : "."}`
  ); // dzięki rest można zbierać argumenty króre zostały umieszczone poza parametrami
}
showUsers("Kacper", "Wojtek", "Maciek", "Szymek");

// METODY A FUNKCJE
// Metody to funkcje umieszczone w obiekcie

const objectExample = {
  showName: function () {
    console.log("Jan");
  },
  showAge() {
    console.log(30);
  },
};

objectExample.showName();
objectExample.showAge();
