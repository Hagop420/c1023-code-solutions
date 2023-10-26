/* exported oddOrEven */
function oddOrEven(numbers) {
  return numbers.map((nums) => {
    if (nums % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  });
}

console.log(oddOrEven());
