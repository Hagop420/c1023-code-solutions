/* exported equal */
function equal(first, second) {
  let str;

  if (first.length === second.length) {
    str = true;
  } else {
    str = false;
  }

  for (let i = 0; i < first.length; i += 1) {
    if (first[i] !== second[i]) {
      str = false;
    }
  }
  return str;
}

// console.log(equal([1, 2, 3, 4, 5] ,  [1, 2, 3, 4, 5]))
