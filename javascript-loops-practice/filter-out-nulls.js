/* exported filterOutNulls */
function filterOutNulls(values) {
  return values.filter((val) => val !== null);
}

console.log(filterOutNulls());
