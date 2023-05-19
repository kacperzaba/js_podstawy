// Pętla w pętli

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(
//       `zmienna i czyli ${i} pomnożona przez j czyli ${j} da wynik ${i * j}`
//     );
//   }
// }
// Przykład 1
// const usersAge = [19, 18, 15, 45, 34, 33, 25];

// for (let i = 0; i < usersAge.length; i++) {
// //   console.log(`wiek użtkownika numer ${i} to ${usersAge[i]}`);
// }

// Przykład 2
// const usersDateBrith = [2000, 1992, 1932, 1980];
// const currentYear = 2023;

// for (let i = 0; i < usersDateBrith.length; i++) {
//   const userAge = currentYear - usersDateBrith[i];
//   console.log(`wiek użytkownika numer ${i} to ${userAge}`);
// }

// Przykład 3
// const guest = [
//   "piłkarz",
//   "kucharz",
//   "murarz",
//   "programista",
//   "polityk",
//   "pisarz",
//   "magazynier",
//   "emeryt",
// ];

// for (let i = 0; i < guest.length; i++) {
//   if (guest[i] === "programista") {
//     console.log("przepraszam nie ma juz miejsc");
//   } else if (guest[i] === "polityk") {
//     console.log("tym bardziej nie ma miejsca");
//   } else {
//     console.log(`witam panie ${guest[i]}, zapraszamy!!!!`);
//   }
// }

// Pętla for ... of
// przechodzi po elementach a nie indeksach
const colors = [
  "red",
  "green",
  "blacka",
  "yellow",
  "white",
  "gold",
  "silver",
  "brown",
];
for (const color of colors) {
  console.log(color);
}
