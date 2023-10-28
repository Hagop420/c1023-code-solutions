/* exported numVowels */
const numVowels = (string) => {
  let vowelCounter = 0;
  let str;
  const regex = /[aeiouAEIOU]/;

  if (string === '') {
    return 0;
  }

  for (let i = 0; i < string.length; i += 1) {
    if (regex.test(string[i])) {
      str = vowelCounter += 1;
    }
  }
  return str;
};

console.log(numVowels(''));
