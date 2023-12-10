import { charCounts } from './charCounts';

// Your code goes here

describe('charCounts', () => {
  it('Write a unit test that verifies that an Object gets returned with the string characters as keys and the value being the number of times that character occurred', () => {
    const result = charCounts('pepper');
    const ans = { p: 3, e: 2, r: 1 };
    expect(result).toEqual(ans);
  });
  it('Write a unit test that checks that uppercase and lowercase characters are counted together', () => {
    const result = charCounts('PaSseNgEr');
    const ans = { p: 1, a: 1, s: 2, e: 2, n: 1, g: 1, r: 1 };
    expect(result).toEqual(ans);
  });
  it('jWrite a unit test that verifies that an Object gets returned with the string characters as keys and the value being the number of times that character occurred', () => {
    const result = charCounts('Hello World');
    const ans = { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 };
    expect(result).toEqual(ans);
  });
  it('Write a unit test that checks that an empty object gets returned if the string is empty', () => {
    const result = charCounts('');
    const ans = {};
    expect(result).toEqual(ans);
  });
});
