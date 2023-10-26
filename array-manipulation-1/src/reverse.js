/* exported reverse */
function reverse(array) {
  const output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

console.log(reverse(['foo', 'bar', 'baz']));
