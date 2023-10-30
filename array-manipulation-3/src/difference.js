/* exported difference */

const difference = (first, second) => [
  ...first.filter((e) => !second.includes(e)),
  ...second.filter((e) => !first.includes(e)),
];
console.log(difference([2, 1], [2, 3]));
