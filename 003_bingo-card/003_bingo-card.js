const NUMBERS_LIST = [...Array(75).keys()];
const STATE_BINGO = [
  { letter: "B", takes: 5 },
  { letter: "I", takes: 5 },
  { letter: "N", takes: 4 },
  { letter: "G", takes: 5 },
  { letter: "O", takes: 5 },
];

function getCard() {
  let result = [];

  STATE_BINGO.forEach(({ letter, takes }) => {
    let numbers = NUMBERS_LIST.splice(0, 15).map((n) => `${letter + (n + 1)}`);

    for (let i = 0; i < takes; i++) {
      let randomNumber = Math.floor(Math.random() * numbers.length);
      result.push(numbers[randomNumber]);
      numbers.splice(randomNumber, 1);
    }
  });

  return result;
}

console.log(getCard());
