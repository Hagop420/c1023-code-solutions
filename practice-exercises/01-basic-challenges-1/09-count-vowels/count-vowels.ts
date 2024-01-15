export function countVowels(str: string): number {
  var m = str.match(/[aeiouAEIOU]/g);
  return m === null ? 0 : m.length;
}
