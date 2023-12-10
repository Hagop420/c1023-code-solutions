import { firstChars } from './first-chars';

// Your code goes here

describe('firstChars', () => {
  it('returns the first character', () => {
    const result = firstChars(1, 'React');
    expect(result).toEqual('R');
  });
  it('returns the first character', () => {
    const result = firstChars(4, 'JavaScript');
    expect(result).toEqual('Java');
  });
  it('returns the first character', () => {
    const result = firstChars(20, 'Learningfuze');
    expect(result).toEqual('Learningfuze');
  });
  it('returns the first character', () => {
    const result = firstChars(5, '');
    expect(result).toEqual('');
  });
});
