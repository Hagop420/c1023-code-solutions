/* exported pick */
function pick(source, keys) {
  const obj = {};

  for (const key of keys) {
    if (source[key] !== undefined) {
      // console.log(source[key])
      obj[key] = source[key];
    }
  }

  return obj;
}

// console.log(pick())
