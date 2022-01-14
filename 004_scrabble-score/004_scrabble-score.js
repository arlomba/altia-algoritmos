const STATE_VALUES = [
  { letters: "", points: 0 },
  { letters: "AEIOULNRST", points: 1 },
  { letters: "DG", points: 2 },
  { letters: "BCMP", points: 3 },
  { letters: "FHVWY", points: 4 },
  { letters: "K", points: 5 },
  { letters: "JX", points: 8 },
  { letters: "QZ", points: 10 },
];

function scrabbleScore(str) {
  let totalPoints = 0;

  str.split("").forEach((char) => {
    STATE_VALUES.find(({ letters, points }) => {
      totalPoints += letters.includes(char.toUpperCase()) && points;
    });
  });

  return totalPoints;
}

console.log(scrabbleScore("")); // 0
console.log(scrabbleScore("STREET")); // 6
console.log(scrabbleScore("st re et")); // 6
console.log(scrabbleScore("ca bba g  e")); // 14
