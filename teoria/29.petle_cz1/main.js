// LOOPS

// pętla FOR
for (let i = 0; i < 10; i++) {
  console.log("wyświetlenie" + i);
}

// pętla WHILE
// while (warunek) {blok kodu}

// while (true) {
//   console.log("działa");
// }

let number = 0;
while (number < 10) {
  number++;
  console.log(number);
}

let money = 50;
while (money >= 8) {
  console.log("Mam jeszcze " + money + " złorych. To pijemy piwko");
  money -= 8;
}
// alert(`za ${money} złote, juz piwka nie kupie :(`);

let gasoline = 40;
let km = 0;

while (gasoline--) {
  km += 18;
  console.log(
    `Przejechaliśmy ${km} kilometrów. \n Została nam jeszcze ${gasoline} litrów benzyny`
  );
}

// DO ... WHILE
let study = "nie, wyrzucili mnie";

do {
  console.log("Idę do szkoły");
} while (study === true);
