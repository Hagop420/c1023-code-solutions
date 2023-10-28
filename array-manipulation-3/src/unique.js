/* exported unique */
function unique(array) {
  const output = [];
  let count = 0;
  let start = false;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

    for (let j = 0; j < output.length; j++) {
      if (array[i] === output[j]) {
        console.log(output[j]);
        start = true;
      }
    }
    count++;
    if (count === 1 && start === false) {
      output.push(array[i]);
    }
    start = false;
    count = 0;
  }

  return output;
}

// console.log(unique([1,3, 3, 2, 5, 2, 1, 4, 5, 5]))
