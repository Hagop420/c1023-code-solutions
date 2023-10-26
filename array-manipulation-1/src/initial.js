/* exported initial */
const initial = (array) => {
  array.pop();
  return array;
};

console.log(initial(['foo', 'bar', 'baz']));
