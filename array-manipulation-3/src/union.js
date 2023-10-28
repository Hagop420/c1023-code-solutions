const union = (first, second) => {
  // spread all to 1 array
  const allEls = [...first, ...second];

  // obj creation
  const uniqueEls = new Set(allEls);

  // back to arr
  const arr = [...uniqueEls];

  return arr;
};

console.log(union());
