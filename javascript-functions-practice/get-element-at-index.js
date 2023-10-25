const getElementAtIndex = (array, index) => {
  if (index >= 0 && index < array.length) {
    return array[index];
  }
};

console.log(getElementAtIndex(['foo', 'bar', 'baz']));
console.log(getElementAtIndex([9, 10, 19, 20]));
console.log(getElementAtIndex([false, true]));
