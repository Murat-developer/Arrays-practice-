const numbers = [1, 2, 3, 4, 5, undefined, null, 0];

console.log(countTruthy(numbers));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
