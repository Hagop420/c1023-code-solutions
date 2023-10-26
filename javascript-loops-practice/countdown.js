/* exported countdown */
function countdown(number) {
  let num = number;
  const array = [];
  while (num >= 0) {
    array.push(num);
    num--;
  }
  return array;
}

console.log(countdown(5));
