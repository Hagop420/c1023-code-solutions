// const x = 10;
// const y = 8;
// const z = 7;

// const maximumValue = Math.max(x, y, z);
// console.log(`maximumvalue: ${maximumValue}`);
// const heroes = ['jack', 'brett', 'IDK'];

// // assign a random number
// let randomNumber = Math.random();
// // append the length of the heroes array to randomNumber
// randomNumber *= heroes.length;
// console.log(randomNumber);
// // gets the index placements of the heroes array randomized
// const randomIndex = Math.floor(randomNumber);
// console.log(randomIndex);

// console.log(`randomIndex: ${randomIndex}`);

// const randomHero = heroes[randomIndex];

// console.log(`randomHero: ${randomHero} is a hero`);

// starting point

const num1 = 10;
const num2 = 1123;
const num3 = 10233;

const maximumValue = Math.max(num1, num2, num3);

console.log(`maximumValue: ${maximumValue}`);

const heroes = ['John Kramer', 'hoffman', 'Someone'];

let randomNumber = Math.random();

randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log(`RandomIndex: ${randomIndex}`);

const randomHero = heroes[randomIndex];

console.log(`randomHero: ${randomHero}`);

// Array Methods
// array
// book objects

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

const library = [
  {
    title: 'JS for intermidiate jobs',
    author: 'Jack Almadjian',
  },
  {
    title: 'CSS animations',
    author: 'Alex Montoya',
  },
  {
    title: 'Keyframes and 3d css styling',
    author: 'shawn idk',
  },
];

const lastBook = library.pop();

console.log('lastBook:', lastBook);

console.log('firstBook:', library.shift());

// push method

console.log(library.push(js));

console.log(library.unshift(css));

console.log(library.splice(1, 1));

console.log('library:', library.shift());

// working with strings

const fullName = 'Jack Almadjian';

const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();

console.log(sayMyName);
