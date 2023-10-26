/* exported tail */
function tail(array) {
  if (array.length === 0) {
    return [];
  }

  for (let i = 1; i < array.length; i++) array[i - 1] = array[i];

  array.length--;
  return array;
}

console.log(tail(['foo', 'bar', 'baz']));
