// ZAD 1
let sum = 0;
for (let i = 0; i <= 100; i += 2) {
  sum += i;
}
console.log(`Suma to ${sum}`);

// ZAD 2
for (let i = 1; i <= 6; i++) {
  stars = "";
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);
}

// ZAD 3
let numbers = 0;
let i = 1;
let counter = 0;
while (i <= 50) {
  if (i % 3 == 0) {
    counter += 1;
  }
  i += 1;
}
console.log(counter);
