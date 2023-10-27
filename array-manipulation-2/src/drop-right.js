/* exported dropRight */
const dropRight = (array, count) => {
  const newArr = [];
  const startIndex = array.length - count;

  for (let i = 0; i < startIndex; i++) {
    newArr.push(array[i]);
  }

  return newArr;
};
