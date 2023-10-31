/* exported capitalizeWords */
function capitalizeWords(string) {
  // let newStr;
  const str = string.split(' ');

  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
  }
  return str.join(' ');
}

console.log(capitalizeWords('HTML, CSS, JavaScript, PHP, SQL'));
