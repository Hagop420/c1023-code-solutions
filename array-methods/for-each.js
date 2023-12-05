const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

// values.forEach((vals) => {
//   console.log('In order:', vals);
// });

// values.reverse('').forEach((vals) => {
//   console.lo5g('Reverse order:', vals);
// });

const length = values.length;

values.forEach((_, ind) => {
  const reverseIndex = length - 1 - ind;
  console.log('in reverse:', values[reverseIndex]);
});
