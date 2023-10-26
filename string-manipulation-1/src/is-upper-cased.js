/* exported isUpperCased */
function isUpperCased(word) {
  // CAP each letter
  if (word === word.toUpperCase()) {
    return true;
  } else if (word === word.toLowerCase()) {
    return false;
  } else if (word === word[0].toUpperCase() + word.substring(1)) {
    return false;
  }
}
