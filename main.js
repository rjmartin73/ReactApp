// CONST & LET

let name = "John";
name = "Ryan";

const person = {
  name: "John",
  age: 33
};

person.name = name;

// console.log(person);

// ARROW FUNCTIONS

const sayHello = name => console.log(`Hello ${name}`);

// sayHello('Ryan');

const fruits = ["Apples", "Oranges", "Bananas", "Grapes"];

// FOREACH

// fruits.forEach(fruit => console.log(fruit));

// MAP

const singleFruit = fruits.map(fruit => fruit.slice(0, -1));

// console.log(singleFruit);

// FILTER

const people = [
  {
    id: 1,
    name: "Karen"
  },
  {
    id: 2,
    name: "Bob"
  },
  {
    id: 3,
    name: "Aaron"
  }
];

// filter out from the array
const people2 = people.filter(person => person.id !== 1);

// add to the end of the array
people2.push({ id: 4, name: "Ryan" });

// console.table(people2);

// SPREAD -- Spread operator = ...

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)]; // spread combined with a filter

//console.table(arr3);

//console.table(arr2);

const person1 = {
  name: "Ryan",
  age: 45
};

const newPerson1 = {
  ...person1, // spread the person object into a new object
  email: "rjmartin73@gmail.com" // and add email address
};

//console.table(newPerson1);

// DESTRUCTURING

const profile = {
  profileName: "John Doe",
  address: {
    street: "40 Main St",
    city: "Boston",
    state: "MA",
    zip: "01456"
  },
  hobbies: ["movies", "music"]
};
const { profileName, address, hobbies } = profile;
const { street, city, state, zip } = profile.address;

// console.info(`Name: ${profileName}\n`, address, hobbies[0]);
// console.warn(`${profileName}\n${street} ${city}, ${state} ${zip}\t`);

// CLASSES

class c_Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  // create a method in the class
  greet() {
    return `Hello my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const c_person1 = new c_Person("David", 90); // instante a new object
const c_person2 = new c_Person("Ryan", 42);

//console.log(c_person1.greet());

// SUBCLASSES

class Customer extends c_Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }
  info() {
    return `${this.name} owes \$${this.balance}.00`;
  }
}

const customer1 = new Customer("Kevin", 30, 300);

console.warn(customer1.info());

// MODULES
// This can't be done here

// file 1 (file1.js)

// export const nname = "Jeff";

// file 2 (file2.js)
// import { name } from "./file1.js";
