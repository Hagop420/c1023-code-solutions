/* exported compact */
function compact(array) {
  const newArr = [];
  array.map((arr) => {
    if (arr) {
      newArr.push(arr);
    }
    return newArr;
  });
  return newArr;
}

console.log(compact([{}, null, {}, {}]));
