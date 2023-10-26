/* exported getIndexes */
function getIndexes(array) {
  const newArr = [];
  for (const ind in array) {
    newArr.push(Number(ind));
  }
  return newArr;
}

console.log(getIndexes(['meow', 'woof', 'idk']));
