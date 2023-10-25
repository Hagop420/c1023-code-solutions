const x = 10;
const y = 8;
const z = 7;

const maximumValue = Math.max(x, y, z);
console.log(maximumValue);
const heroes = [1, 2, 3, 4];

let randomNumber = Math.random();

randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log(randomIndex);

const randomHero = randomIndex[heroes];

console.log(randomHero);

// Array Methods

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

console.log(lastBook);

console.log(library[0]);

// push method

console.log(library.push(js));

console.log(library.unshift(css));

console.log(library.splice(1, 2));

console.log('library:', library);

// working with strings

const fullName = 'Jack Almadjian';

const firstAndLastName = fullName.split(' ');

console.log(firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();

console.log(sayMyName);
