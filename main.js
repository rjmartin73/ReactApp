// CONST & LET

let name = 'John';
name = 'Ryan';

const person = {
  name: 'John',
  age: 33
};

person.name = name;

// console.log(person);

// ARROW FUNCTIONS

const sayHello = name => console.log(`Hello ${name}`);

// sayHello('Ryan');

const fruits = ['Apples', 'Oranges', 'Bananas', 'Grapes'];

// FOREACH

// fruits.forEach(fruit => console.log(fruit));

// MAP

const singleFruit = fruits.map(fruit => fruit.slice(0, -1));

// console.log(singleFruit);

// FILTER

const people = {
  id: 1,
  name: 'Karen',
  id: 2,
  name: 'Bob',
  id: 3,
  name: 'Aaron'
};

const people2 = people.filter(person => person.id !== 2);

console.log(people2);
// SPREAD

// DESTRUCTURING

// CLASSES
