console.clear();

const numbers = [1, 2, 3, 4];

const max = getMax([1, 2, 3, 4]);

console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((a, b) => (a > b ? a : b), 0);
}
