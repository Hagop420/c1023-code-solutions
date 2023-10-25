const convertMinutesToSeconds = (minutes) => Math.pow(10, 3) * 6;

console.log(convertMinutesToSeconds(3));

const greet = (name) => name;

console.log(`Hey ${greet('Jack')}`);

const getArea = (width, height) => {
  return 0.5 * width * height;
};

console.log(getArea(3, 5));

// getFirstName function
const person = {
  firstName: 'Jack',
  lastName: 'Almadjian',
};

const getFirstName = (person) => person.firstName;

console.log(getFirstName({ firstName: 'Jack', lastName: 'Almadjian' }));

// console.log(getFirstName(person));

console.log('My name is:', person);

const getLastElement = (array) => {
  return array[array.length - 1];
};

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
