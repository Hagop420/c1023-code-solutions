/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }

  return numbers;
}

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 1;
  }

  return evenNumbers;
}

console.log(getEvenNumbersToTwenty());
console.log(getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';

  while (count <= times) {
    repeated += word;
    count += 1;
  }

  return repeated;
}

console.log(repeatWord('Jack', 5));
console.log(repeatWord('Jack', 4));
console.log(repeatWord('Jack', 3));
console.log(repeatWord('Jack', 2));
console.log(repeatWord('Jack', 1));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i += 1) {
    console.log(string);
  }
}

console.log('weokooio');

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i += 1) {
    const doubledTwo = numbers.map((arr) => arr * 2);
    doubled.push('doubleAll:', doubledTwo);
  }
  return doubled;
}

console.log(doubleAll([3, 2, 3, 4, 3, 4, 5, 6, 7, 8]));

function getKeys(object) {
  const keys = [];

  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

console.log('getKeys:', getKeys([22, 'Sam']));

function getValues(object) {
  const values = [];

  for (const val in object) {
    values.push(object[val]);
  }
  return values;
}

console.log('getValues:', getValues([22, 'Sam']));
