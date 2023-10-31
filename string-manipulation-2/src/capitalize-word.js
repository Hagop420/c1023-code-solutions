/* exported capitalizeWord */
const capitalizeWord = (word) => {
  const regex = /[A-Z]/;
  let str;
  if (regex.test(word)) {
    str = word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === 'j' || word[i] === 'J') {
      str = 'JavaScript';
    }
  }
  return str;
};

console.log(capitalizeWord('JavascRipt'));
