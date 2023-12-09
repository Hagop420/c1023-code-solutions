import { evenNumbers } from "./numbers";
import { toDollars } from "./numbers";
import { divideBy } from "./numbers";
import { multiplyBy } from "./numbers";

describe('evenNumbers', () => {
      it('returns the even numbers', () => {
        const numbers = [1, 4, 5, 10, 0];
        const result = evenNumbers(numbers);
        expect(result).toEqual([4, 10, 0]);
      });
});



describe('toDollars', () => {
  it('Returns a number formatted in dollars and cents', () => {
    const result = toDollars(20);
    expect(result).toEqual(`$${20}.00`);
  });
});



describe('divideBy', () => {
  it('Returns a new array of numbers where every entry has been divided by the given divisor. Does not modify the original array.', () => {
    const result = divideBy([20 , 20 , 20 , 20] , 4);
    expect(result).toEqual([5 ,5 , 5 , 5]);
  });
});



describe('multiplyBy', () => {
  it('does not multiply string values', () => {
    const obj = { foo: 1,bar: '2' };
    const result = multiplyBy(obj, 3);
    expect(obj).toEqual({ foo: 3, bar: '2' });
  });
});
