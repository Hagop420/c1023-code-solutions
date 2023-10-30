/* exported intersection */
function intersection(first, second) {
  const newArr = [];

  // Create a set from the elements in the first array
  const firstArr = new Set(first);
  console.log(firstArr);
  // Create a set from the elements in the second array
  const secondArrr = new Set(second);
  console.log(secondArrr);
  //  checking if each element is also in the second set
  for (const firstEl of firstArr) {
    if (secondArrr.has(firstEl)) {
      newArr.push(firstEl);
    }
  }

  return newArr;
}
