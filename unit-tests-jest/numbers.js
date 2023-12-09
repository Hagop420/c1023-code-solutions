"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyBy = exports.divideBy = exports.toDollars = exports.evenNumbers = void 0;
/**
 * Returns a new array that contains only the even numbers in the given array.
 */
function evenNumbers(numbers) {
    return numbers.filter(function (n) { return n % 2 === 0; });
}
exports.evenNumbers = evenNumbers;
/**
 * Returns a number formatted in dollars and cents.
 */
function toDollars(amount) {
    return "$".concat(amount.toFixed(2));
}
exports.toDollars = toDollars;
/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
function divideBy(numbers, divisor) {
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] / divisor;
    }
    return numbers;
}
exports.divideBy = divideBy;
/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 */
function multiplyBy(obj, multiplier) {
    Object.entries(obj).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        if (typeof value === 'number') {
            obj[key] = value * multiplier;
        }
    });
    return obj;
}
exports.multiplyBy = multiplyBy;
