console.clear();

console.log(getCount(['a', 'e', 'i', 'o', 'u']));

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < str.length; i++) {
    for (var v = 0; v < vowels.length; v++) {
      if (str[i] === vowels[v]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}
