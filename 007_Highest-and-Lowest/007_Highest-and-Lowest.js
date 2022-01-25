function highAndLow(numbers) {
  const array = numbers.split(" ");
  return `${Math.max(...array)} ${Math.min(...array)}`;
}

[
  "1 2 3 4 5", // return "5 1"
  "1 2 -3 4 5", // return "5 -3"
  "1 9 3 4 -5", // return "9 -5"
  "8 3 -5 42 -1 0 0 -9 4 7 4 -4", // return 42 -9
].forEach((test) => {
  console.log(highAndLow(test));
});
