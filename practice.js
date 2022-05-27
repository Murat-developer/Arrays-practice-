console.clear();

const person = [
  {
    name: 'John Smith',
    gender: 'male',
    age: 34,
    height: 158,
    eyes_color: 'green',
    weigth: 76,
  },
  {
    name: 'Mary Popins',
    gender: 'female',
    age: 25,
    height: 167,
    eyes_color: 'blue',
    weigth: 55,
  },
  {
    name: 'William Phill',
    gender: 'male',
    age: 40,
    height: 178,
    eyes_color: 'brown',
    weigth: 85,
  },
];
//***MAP***
//1. Get array of all names
const allNames = person.map((value) => value.name);
// console.log(allNames);
//2. Get array of all heights
const allHeights = person.map((value) => value.height);
// console.log(allHeights);
//3. Get array of objects with just name and height properties
const nameAndHeigth = person.map((object) => ({
  name: object.name,
  height: object.height,
}));
// console.log(nameAndHeigth);
//4. Get array of all first names
const firstName = person.map(
  (value) => value.name.split(' ')[0],
);
// console.log(firstName);

//***REDUCE***
//1. Get total mass of all characters
const totalAge = person.reduce(
  (accum, curr) => accum + curr.age,
  0,
);
// console.log(totalAge);
//2. Get total height of all characters
const totalHeight = person.reduce(
  (accum, curr) => accum + curr.height,
  0,
);
// console.log(totalHeight);
//3. Get total number of characters by eye color
const totalEyesColor = person.reduce((accum, curr) => {
  const color = curr.eyes_color;
  if (accum[color]) accum[color]++;
  else accum[color] = 1;

  return accum;
}, {});
// console.log(totalEyesColor);
//4. Get total number of characters in all the character names
const sumName = person.reduce((accum, curr) => {
  const countName = curr.name;
  if (accum[countName]) accum[countName]++;
  else accum[countName] = 1;

  return accum;
}, {});
// console.log(sumName);

const totalName = person.reduce((accum, curr) => {
  const countGender = curr.gender;
  if (accum[countGender]) accum[countGender]++;
  else accum[countGender] = 1;

  return accum;
}, {});
// console.log(totalName);

//***FILTER***
//1. Get characters with mass greater than 100
const foundWeigth = person.filter(
  (person) => person.weigth < 85,
);
// console.log(foundWeigth);
//2. Get characters with height less than 200
const foundHeigth = person.filter(
  (person) => person.height > 170,
);
// console.log(foundHeigth);
//3. Get all male characters
const onlyMale = person.filter(
  (person) => person.gender !== 'female',
);
// console.log(onlyMale);

//4. Get all female characters
const onlyFemale = person.filter(
  (person) => person.gender === 'female',
);
// console.log(onlyFemale);

//***SORT***
//1. Sort by mass
const sortByWeigth = person.sort(
  (a, b) => b.weigth - a.weigth,
);
// console.log(sortByWeigth);

//2. Sort by height
const sortByHeight = person.sort(
  (a, b) => a.height - b.height,
);
// console.log(sortByHeight);
//3. Sort by name
const sortByName = person.sort(
  (a, b) => a.name - b.name,
);
// console.log(sortByName);

//4. Sort by gender
const sortedByGender = person.sort(
  (a, b) => a.gender - b.gender,
);
// console.log(sortedByGender);

//***EVERY***
//1. Does every character have blue eyes?
const checkBlueEyes = person.every(
  (person) => person.eyes_color === 'blue',
);
// console.log(checkBlueEyes);
//2. Does every character have mass more than 40?
const checkWeight = person.every(
  (person) => person.weigth > 50,
);
// console.log(checkBlueEyes);
//3. Is every character shorter than 200?
const checkHeight = person.every(
  (person) => person.height < 200,
);
// console.log(checkHeight);
//4. Is every character male?
const foundGender = person.every(
  (person) => person.gender === 'male',
);
// console.log(foundGender);

//***SOME***
//1. Is there at least one male character?
const atLeastOneMale = person.some(
  (person) => person.gender === 'male',
);
// console.log(atLeastOneMale);

//2. Is there at least one character with blue eyes?
const foundEyesColor = person.some(
  (person) => person.eyes_color === 'blue',
);
// console.log(foundEyesColor);

//3. Is there at least one character taller than 210?
const foundHeight = person.some(
  (person) => person.height > 200,
);
// console.log(foundHeight);

//4. Is there at least one character that has mass less than 50?
const foundWeight = person.some(
  (person) => person.weigth < 50,
);
// console.log(foundWeight);

const aboutPerson = person
  .filter(
    (person) =>
      person.gender === 'male' && person.age > 30,
  )
  .sort((a, b) => a.height - b.height)
  .reverse()
  .map((person) => person.name.split(' ')[0]);

console.log(aboutPerson);
