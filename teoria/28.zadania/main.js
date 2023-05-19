// ZAD 1
const numbers = [5, 11, 15];
// numbers[0] + numbers[numbers.length - 1] > numbers[1]
//   ? console.log("suma pierwszeg i ostatniego jest większa niż drugi element")
//   : console.log(
//       "suma pierwszeg i ostatniego nie jest większa niż drugi element"
//     );

if (numbers[0] + numbers[2] > numbers[1]) {
  console.log("tak");
} else {
  console.log("nie");
}

// ZAD 2
const firstArray = [1, 2];
const secondArray = [4, 5, 3];
if (firstArray.length > secondArray.length) {
  console.log("pierwsza jest dłuższa");
} else if (firstArray.length == secondArray.length) {
  console.log("są równej długosci");
} else {
  console.log("druga jest dłuższa");
}

// ZAD 3
const fruits = ["pear", "banana", "orange"];
const fruits_v2 = ["apple", "banana", "orange"];
if (fruits_v2[0] === "apple") {
  console.log("to 'apple");
} else {
  console.log("to nie 'apple");
}
