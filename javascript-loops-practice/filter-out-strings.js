/* exported filterOutStrings */
function filterOutStrings(values) {
  return values.filter((vals) => typeof vals !== 'string');
}

console.log(filterOutStrings());
