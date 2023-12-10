function filterOutOdds(...topics) {
  return topics.filter((number) => number % 2 === 0);
}

const numbers = filterOutOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers);
