const convertMinutesToSeconds = (minutes = 3) => Math.pow(10, 3) * 6;

console.log(convertMinutesToSeconds());

const greet = (name) => 'Jack';

console.log(`Hey ${greet()}`);

const getArea = (width = 2, height = 23) => {
  return 0.5 * width * height;
};

console.log(getArea());

// getFirstName function

const getFirstName = (person) => person;

const person = { name: 'Jack' };

console.log('My name is:', getFirstName(person.name));

const getLastElement = (
  array = ['propane', 'and', 'propane', 'accessories']
) => {
  return array[array.length - 1];
};

console.log(getLastElement());
