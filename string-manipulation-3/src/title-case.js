function titleCase(title) {
  // Define the list of minor words that should remain in lowercase
  const minorWords = [
    'a',
    'an',
    'and',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
  ];

  // Split the title into words
  const words = title.split(' ');

  // Helper function to capitalize the first letter of a word
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Iterate through the words, applying the title case rules
  const titleCaseWords = words.map((word, index) => {
    const lowercaseWord = word.toLowerCase();

    if (
      index === 0 ||
      !minorWords.includes(lowercaseWord) ||
      word === 'JavaScript'
    ) {
      // Capitalize the first word, any word that is not in the minor words list, or "JavaScript"
      return capitalizeFirstLetter(word);
    } else {
      // Keep minor words in lowercase
      return lowercaseWord;
    }
  });

  // Join the title case words back into a single string
  const titleCaseTitle = titleCaseWords.join(' ');

  return titleCaseTitle;
}

console.log(titleCase());
