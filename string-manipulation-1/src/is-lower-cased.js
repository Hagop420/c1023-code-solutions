/* exported isLowerCased */
function isLowerCased(word) {
  if (word === word[0].toUpperCase() + word.substring(1)) {
    return false;
  } else if (word.toLowerCase()) {
    return true;
  }
}
