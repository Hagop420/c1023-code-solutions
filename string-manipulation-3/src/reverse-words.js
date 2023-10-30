/* exported reverseWords */
const reverseWords = (string) => {
  let newWord = '';
  let output = '';
  // backward string looping
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === ' ') {
      // console.log(string)

      output = ' ' + newWord + output;
      newWord = '';
    } else {
      newWord += string[i];
    }
  }
  return newWord + output;
};

// console.log(reverseWords('All Code All Day'))
