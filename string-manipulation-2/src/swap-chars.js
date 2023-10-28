/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let strNew = '';
  for (let i = 0; i < string.length; i += 1) {
    if (i === firstIndex) {
      strNew += string[secondIndex];
    } else if (i === secondIndex) {
      strNew += string[firstIndex];
    } else {
      strNew += string[i];
    }
  }
  return strNew;
}

console.log(swapChars(0, 4, 'React'));
