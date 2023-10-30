/* exported invert */
function invert(source) {
  const flipped = Object.entries(source).map(([key, value]) => [value, key]);

  return Object.fromEntries(flipped);
}
