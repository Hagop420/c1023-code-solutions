export function isPalindrome(str: string): boolean {
  var regexCode = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(regexCode, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}
