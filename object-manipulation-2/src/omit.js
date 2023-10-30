/* exported omit */
const omit = (source, keys) => {
  const obj = { ...source };

  for (const key of keys) {
    // if (source.hasOwnProperty(key)) {
    delete obj[key];
    // }
  }
  return obj;
};
console.log(omit());

// if the enite object of array elemets does not = to the entire array
// keys is the entire array
