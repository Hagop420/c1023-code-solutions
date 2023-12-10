import { isAnagram } from './is-anagram';

// Your code goes here

describe('isAnagram', () => {
  it('joining the strings spaces', () => {
    const result = isAnagram('astronomer', 'moon starer');
    expect(result).toEqual(true);
  });
  it('joining the strings spaces', () => {
    const result = isAnagram('listen', 'silent');
    expect(result).toEqual(true);
  });
  it('joining the strings spaces', () => {
    const result = isAnagram('programmer', 'poor gamer');
    expect(result).toEqual(false);
  });
  it('joining the strings spaces', () => {
    const result = isAnagram('red dad', 'rad ede');
    expect(result).toEqual(false);
  });
});
