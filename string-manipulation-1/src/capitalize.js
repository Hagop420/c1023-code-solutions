/* exported capitalize */
function capitalize(word) {
  if (word === word.toLowerCase()) {
    return word[0].toUpperCase() + word.substring(1);
  } else if (/[A-Z]/.test(word)) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }
  return word;
}
console.log(capitalize('tO'));
