let position = 12;

const score = 23.12;

const addScore = function (score) {
  score += 10;
  console.log(score);
};

const addPositionAndScore = (position, score) => {
  console.log(`wynik to ${position + score}`);
};
