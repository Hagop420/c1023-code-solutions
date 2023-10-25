const x = 10;
const y = 8;
const z = 7;

const maximumValue = Math.max(x, y, z);

console.log(maximumValue);

const heroes = ['mike', 'Parth', 'Jack'];

let randomNumber = Math.random();

randomNumber *= heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log(randomIndex);

const randomHero = heroes[randomIndex];

console.log(randomHero);
