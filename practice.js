const person = [
  {
    id: 1,
    name: 'John Smith',
    gender: 'male',
    age: 30,
    height: 180,
    weigth: 79,
    eyes_color: 'blue',
  },
  {
    id: 2,
    name: 'Mile Carter',
    gender: 'female',
    age: 54,
    height: 166,
    weigth: 58,
    eyes_color: 'brown',
  },
  {
    id: 3,
    name: 'William Lewis',
    gender: 'male',
    age: 33,
    height: 169,
    weigth: 76,
    eyes_color: 'green',
  },
  {
    id: 4,
    name: 'Katy Dollas',
    gender: 'female',
    age: 39,
    height: 178,
    weigth: 81,
    eyes_color: 'dark brown',
  },
  {
    id: 5,
    name: 'Clark Zenger',
    gender: 'male',
    age: 35,
    height: 175,
    weigth: 67,
    eyes_color: 'brown',
  },
];

//***MAP***
// //1. Get array of all names
// const allNames = person.map((names) => names.name);
// console.log(allNames);

// //2. Get array of all heights
// const allHeights = person.map((height) => height.height);
// console.log(allHeights);

// //3. Get array of objects with just name and height properties
// const nameAndHeight = person.map((person) => ({
//   name: person.name,
//   height: person.height,
// }));
// console.log(nameAndHeight);
// //4. Get array of all first names
// const allFirstName = person.map((person) => person.name.split(' ')[0]);
// console.log(allFirstName);

// //***REDUCE***
// //1. Get total weigth of all characters
// const totalWeigth = person.reduce((accumulator, current) => {
//   return accumulator + current.weigth;
// }, 0);
// console.log(totalWeigth);

// //2. Get total height of all characters
// const totalHeigth = person.reduce(
//   (accumulator, current) => accumulator + current.height,
//   0,
// );
// console.log(totalHeigth);

// //3. Get total number of characters by eye color
// const countEyeColors = person.reduce((accumulator, current) => {
//   const eyesColor = current.eyes_color;
//   if (accumulator[eyesColor]) accumulator[eyesColor]++;
//   else accumulator[eyesColor] = 1;

//   return accumulator;
// }, {});

// console.log(countEyeColors);
// //4. Get total number of characters in all the character names
// const totalNameCharacter = person.reduce(
//   (accumulator, current) => accumulator + current.name.length,
//   0,
// );
// console.log(totalNameCharacter);

// //***FILTER***
// //1. Get characters with mass greater than 100
// const greaterWeigth = person.filter((item) => item.weigth < 70);
// console.log(greaterWeigth);

// //2. Get characters with height less than 200
// const lessHeight = person.filter((item) => item.height < 170);
// console.log(lessHeight);

// //3. Get all male characters
// const foundMale = person.filter((item) => item.gender !== 'female');
// console.log(foundMale);

// //4. Get all female characters
// const foundFemale = person.filter((item) => item.gender !== 'male');
// console.log(foundFemale);

//***SORT***
// //1. Sort by mass
// const sortedByWeigth = person.sort((a, b) => {
//   return a.weigth >= b.weigth;
// });
// console.log(sortedByWeigth);

// //2. Sort by height
// const sortByHeight = person.sort((a, b) => {
//   return a.height >= b.height;
// });
// console.log(sortByHeight);

// //3. Sort by name
// const sortedByName = person.sort((a, b) => {
//   return a.name - b.name;
// });
// console.log(sortedByName);
// //4. Sort by gender
// const sortedByGender = person.sort((a, b) => b.gender - a.gender);
// console.log(sortedByGender);

//***EVERY***
// //1. Does every character have blue eyes?
// const blueEyes = person.every((item) => item.eyes_color !== 'blue');
// console.log(blueEyes);
// //2. Does every character have mass more than 40?
// const checkWeigth = person.every((item) => item.weigth > 40);
// console.log(checkWeigth);
// //3. Is every character shorter than 200?
// const checkHeight = person.every((item) => item.height < 200);
// console.log(checkHeight);
// //4. Is every character male?
// const checkGender = person.every((item) => item.gender === 'male');
// console.log(checkGender);

//***SOME***
//1. Is there at least one male character?
const atLeastOneMale = person.some((item) => item.gender === 'male');
console.log(atLeastOneMale);
//2. Is there at least one character with blue eyes?
const atLeastOneBlueEyes = person.some((item) => item.eyes_color === 'blue');
console.log(atLeastOneBlueEyes);
//3. Is there at least one character taller than 210?
const atLeastOneHeigth = person.some((item) => item.height > 210);
console.log(atLeastOneHeigth);
//4. Is there at least one character that has mass less than 50?
const atLeastOneHavy = person.some((item) => item.weigth < 50);
console.log(atLeastOneHavy);
