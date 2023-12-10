import { fuzeBuzz } from './fuzeBuzz';

// Your code goes here
describe('fuzeBuzz', () => {
  it('Array of Strings containing all numbers up to & including limit get returned', () => {
    const result = fuzeBuzz(2);
    expect(result).toEqual(['1', '2']);
  });

  it('Write a unit test that verifies that "Learning" gets added to the array if the current number is divisible by 3', () => {
    const result = fuzeBuzz(3);
    expect(result).toEqual(['1', '2', 'Learning']);
  });

  it('Write a unit test that verifies that "Fuze" gets added to the array if the current number is divisible by 5', () => {
    const result = fuzeBuzz(5);
    expect(result).toEqual(['1', '2', 'Learning', '4', 'Fuze']);
  });

  it('Write a unit test that verifies that "LearningFuze" gets added to the array if the current number is divisible by 15', () => {
    const result = fuzeBuzz(15);
    expect(result).toEqual([
      '1',
      '2',
      'Learning',
      '4',
      'Fuze',
      'Learning',
      '7',
      '8',
      'Learning',
      'Fuze',
      '11',
      'Learning',
      '13',
      '14',
      'LearningFuze',
    ]);
  });
});
