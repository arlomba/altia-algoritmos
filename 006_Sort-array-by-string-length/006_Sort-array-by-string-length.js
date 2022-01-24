function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

[
  ["Telescopes", "Glasses", "Eyes", "Monocles"],
  ["Beg", "Life", "I", "To"],
  ["", "Moderately", "Brains", "Pizza"],
  ["Longer", "Longest", "Short"],
].forEach((test) => {
  console.log(sortByLength(test));
});
