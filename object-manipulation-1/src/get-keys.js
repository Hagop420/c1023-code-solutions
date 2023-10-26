/* exported getKeys */
function getKeys(object) {
  const output = [];
  for (const obj in object) {
    output.push(obj);
  }
  return output;
}
