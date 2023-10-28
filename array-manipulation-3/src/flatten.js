/* exported flatten */
function flatten(array) {
  return array.reduce((acc, currIt) => {
    if (Array.isArray(currIt)) {
      console.log(currIt);
      return [...acc, ...currIt];
    }

    return [...acc, currIt];
  }, []);
}
