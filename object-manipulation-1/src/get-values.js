/* exported getValues */
const getValues = (object) => {
  const output = [];
  for (const out in object) {
    output.push(object[out]);
  }
  return output;
};
