// equal to returning a string of objects

// Index signatures
export interface objType {
  [key: string]: number;
}
// end Index signatures

export function charCounts(word: string): objType {
  const obj: objType = {};

  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
