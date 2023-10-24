const convertMinutesToSeconds = (minutes) => Math.pow(10, 3) * 6;

console.log(convertMinutesToSeconds(3));

const greet = (name) => name;

console.log(`Hey ${greet('Jack')}`);

const getArea = (width, height) => {
  return 0.5 * width * height;
};

console.log(getArea(3, 5));

// getFirstName function
const getFirstName = (him = hi) => him.name;
const hi = {
  name: 'weed',
};

console.log(getFirstName());

const getLastElement = (
  array = ['propane', 'and', 'propane', 'accessories']
) => {
  return array[array.length - 1];
};

console.log(getLastElement());
