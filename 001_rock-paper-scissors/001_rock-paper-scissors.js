const STATE_ROCK = "ROCK";
const STATE_PAPER = "PAPER";
const STATE_SCISSORS = "SCISSORS";
const PLAYER_ONE_WON = "Player one won!";
const PLAYER_TWO_WON = "Player two won!";

function rockPaperScissors(playerOne, playerTwo) {
  if (playerOne === playerTwo) {
    return "Draw!";
  }

  return (playerOne === STATE_ROCK && playerTwo === STATE_SCISSORS) ||
    (playerOne === STATE_PAPER && playerTwo === STATE_ROCK) ||
    (playerOne === STATE_SCISSORS && playerTwo === STATE_PAPER)
    ? PLAYER_ONE_WON
    : PLAYER_TWO_WON;
}

// Player one won!
console.log(rockPaperScissors(STATE_ROCK, STATE_SCISSORS));
console.log(rockPaperScissors(STATE_PAPER, STATE_ROCK));
console.log(rockPaperScissors(STATE_SCISSORS, STATE_PAPER));

// Player two won!
console.log(rockPaperScissors(STATE_SCISSORS, STATE_ROCK));
console.log(rockPaperScissors(STATE_ROCK, STATE_PAPER));
console.log(rockPaperScissors(STATE_PAPER, STATE_SCISSORS));

// Draw!
console.log(rockPaperScissors(STATE_PAPER, STATE_PAPER));
