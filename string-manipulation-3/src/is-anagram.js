/* exported isAnagram */
const isAnagram = (first, secondString) => {
  const str1 = first.replace(/\s+/g, '');
  const str2 = secondString.replace(/\s+/g, '');

  const firstSpl = str1.toLowerCase().split('').sort().join('');
  const secondSpl = str2.toLowerCase().split('').sort().join('');

  return firstSpl === secondSpl;
};

// console.log(isAnagram('anagram' , 'nag a ram'))
