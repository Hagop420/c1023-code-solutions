/* exported includes */
function includes(array, value) {
  if (array.length === 0) {
    return false;
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) {
      return true;
    }
  }
  return false;
}
