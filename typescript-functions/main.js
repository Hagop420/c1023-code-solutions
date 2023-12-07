function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(convertMinutesToSeconds(5));
// 2nd function
function greet(name) {
  return 'Hey '.concat(name);
}
console.log(greet('Jack'));
// 3rd function
function getArea(width, height) {
  return width * height;
}
console.log(getArea(10993262343528714, 3882836));
// 4TH FUNCTIOn
function getFirtName(names) {
  return names.firstName;
}
console.log(getFirtName({ firstName: 'Jack', lastName: 'Almadjian' }));
// 5th function(final)
function getLastElement(array) {
  return array[array.length - 1];
}
console.log(
  getLastElement(['Kiwi', 'Plums', 'Peaches', 'Apples', 'Lime', 'Cherries'])
);
