const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

// //***MAP***
// //1. Get array of all names
// const names = characters.map((character) => character.name);
// // console.log(names);
// //2. Get array of all heights
// const height = characters.map((character) => character.height);
// // console.log(height);
// //3. Get array of objects with just name and height properties
// const nameAndHeight = characters.map((charackter) => ({
//   name: charackter.name,
//   height: charackter.height,
// }));
// // console.log(nameAndHeight);
// //4. Get array of all first names
// const firstName = characters.map((charackter) => charackter.name.split(' ')[0]);
// // console.log(firstName);

//***REDUCE***
// //1. Get total mass of all characters
// const totalMass = characters.reduce(
//   (accum, current) => accum + current.mass,
//   0,
// );
// console.log(totalMass);
// //2. Get total height of all characters
// const totalHeight = characters.reduce(
//   (accum, current) => accum + current.height,
//   0,
// );
// console.log(totalHeight);
// // 3. Get total number of characters by eye color
// const charackterByEyeColor = characters.reduce((accumulator, current) => {
//   const color = current.eye_color;
//   if (accumulator[color]) accumulator[color]++;
//   else accumulator[color] = 1;
//   return accumulator;
// }, {});
// console.log(charackterByEyeColor);
// //4. Get total number of characters in all the character names

// const totalNameCharacters = characters.reduce(
//   (accumulator, current) => accumulator + current.name.length,
//   0,
// );
// console.log(totalNameCharacters);

//***FILTER***
// //1. Get characters with mass greater than 100
// const greaterMass = characters.filter((character) => character.mass > 100);
// console.log(greaterMass);
// //2. Get characters with height less than 200
// const lessHeight = characters.filter((character) => character.height < 200);
// console.log(lessHeight);
// //3. Get all male characters
// const maleCharacter = characters.filter(
//   (character) => character.gender === 'male',
// );
// console.log(maleCharacter);
// //4. Get all female characters
// const femaleCharacter = characters.filter(
//   (character) => character.gender !== 'male',
// );
// console.log(femaleCharacter);

//***SORT***
//1. Sort by mass
// const sortedByMass = characters.sort((a, b) => a.mass - b.mass); // Ascending order
// console.log(sortedByMass);
// //2. Sort by height
// const byHeight = characters.sort((a, b) => a.height - b.height);
// console.log(byHeight);
// //3. Sort by name
// const byName = characters.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   return 1;
// });
// console.log(byName);
// //4. Sort by gender
// const byGender = characters.sort((a, b) => {
//   if (a.gender === 'female') return -1;
//   return 1;
// });
// console.log(byGender);

//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every(
  (character) => character.eye_color === 'blue',
);
console.log(allBlueEyes);
//2. Does every character have mass more than 40?
const byMassOver = characters.every((character) => character.mass > 40);
console.log(byMassOver);
//3. Is every character shorter than 200?
const byHeightOver = characters.every((character) => character.height < 200);
console.log(byHeightOver);
//4. Is every character male?
const byGenderMale = characters.every(
  (character) => character.gender === 'male',
);
console.log(byGenderMale);

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
