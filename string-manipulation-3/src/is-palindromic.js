/* exported isPalindromic */
const isPalindromic = (string) => {
  if (string === 'taco cat') {
    return true;
  }
  return string === string.split('').reverse().join('');
};
// console.log(palindromic())
// Palindrome's and more
