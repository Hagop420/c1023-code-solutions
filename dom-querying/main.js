console.log('hello, world');

console.log('$heading', document.querySelector('h1'));

console.log(document.querySelector('h1'));

console.dir(document.querySelector('h1'));

console.log('$explanation', document.getElementById('explanation'));

console.dir(document.getElementById('explanation'));

console.log('$hint', document.querySelector('.hint'));

console.log(document.querySelector('.hint'));
console.dir(document.querySelector('.hint'));
console.log('$paragraphs', document.querySelectorAll('p'));
console.dir(document.querySelectorAll('p'));

console.log('$links', document.querySelectorAll('a'));

const asshole = document.querySelector('a');

asshole.forEach((oop) => {
  console.log(oop);
});
