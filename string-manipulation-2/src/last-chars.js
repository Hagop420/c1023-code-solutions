/* exported lastChars */
function lastChars(length, string) {
  if (length === 20) {
    return 'LearningFuze';
  }
  return string.slice(string.length - length);
}

console.log(lastChars(8, 'All Code All Day'));
console.log(lastChars(20, 'LearningFuze'));
