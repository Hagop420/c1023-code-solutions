/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const arr = words;

  for (let i = 0; i < arr.length; i++) {
    console.log((arr[i] = arr[i] + suffix));
  }
  return arr;
}
