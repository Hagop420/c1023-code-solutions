/* exported findIndex */
function findIndex(array, value) {
  const foundIndex = -1;
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === value) {
      return foundIndex;
    }
  }
  return foundIndex;
}

// console.log(findIndex())
