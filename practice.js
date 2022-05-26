const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  },
};

// const another = Object.assign(
//   { color: 'yellow', name: 'Mary' },
//   circle,
// );
// console.log(another);

const another = { ...circle };
console.log(another);
