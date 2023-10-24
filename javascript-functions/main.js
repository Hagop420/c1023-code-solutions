const convertMinutesToSeconds = (minutes) => Math.pow(10, 3) * 6;

console.log(convertMinutesToSeconds(3));

const greet = (name) => name;

console.log(`Hey ${greet('Jack')}`);

const getArea = (width, height) => {
  return 0.5 * width * height;
};

console.log(getArea(3, 5));

// getFirstName function

const getFirstName = (person) => person.name;

const person = { name: 'Jack' };

console.log('My name is:', getFirstName(person));

const getLastElement = (
  array = ['propane', 'and', 'propane', 'accessories']
) => {
  return array[array.length - 1];
};

console.log(getLastElement());
