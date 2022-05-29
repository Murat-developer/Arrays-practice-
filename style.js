console.clear();

// const person = [
//   {
//     name: 'Mary Smith',
//     age: 30,
//     mass: 65,
//     height: 170,
//     eyes_color: 'brown',
//     gender: 'female',
//   },
//   {
//     name: 'William Clarck',
//     age: 33,
//     mass: 78,
//     height: 178,
//     eyes_color: 'blue',
//     gender: 'male',
//   },
//   {
//     name: 'Kate Querel',
//     age: 34,
//     mass: 68,
//     height: 173,
//     eyes_color: 'brown',
//     gender: 'female',
//   },
//   {
//     name: 'John Smith',
//     age: 38,
//     mass: 84,
//     height: 180,
//     eyes_color: 'green',
//     gender: 'male',
//   },
// ];

const ul = document.querySelector('.people');

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun -li'];

// people.forEach((person, index) =>
//   console.log(index, person),
// );

// const logPerson = (person, index) => {
//   console.log(`${index} - Hello ${person}`);
// };

// people.forEach(logPerson);

let html = ``;
people.forEach((person) => {
  html += `<li style = "color: purple ">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;
