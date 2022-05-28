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

const person = {
  firstName: 'John',
  lastName: 'Smith',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = 'Mery Clarks';

console.log(person);
