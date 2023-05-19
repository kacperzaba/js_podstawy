// ZAD 1
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5]));

// ZAD 2
const filterEvenNumbers = function (numbers) {
  const evenArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenArray.push(numbers[i]);
    }
  }
  return evenArray;
};

// ZAD 3
const countOccurrences = function (array, element) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      counter++;
    }
  }
  return counter;
};
