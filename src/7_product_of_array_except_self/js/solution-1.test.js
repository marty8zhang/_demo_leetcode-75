import productExceptSelf from './solution-1.js';

describe('`productExceptSelf()`', () => {
  it('should return the numbers in the reversed order, when only two numbers are given', () => {
    expect(productExceptSelf([2, 3])).toEqual([3, 2]);
  });

  it('should return the numbers in the reversed order, when only two numbers are given and one of them is negative', () => {
    expect(productExceptSelf([-2, 3])).toEqual([3, -2]);
  });

  it('should return all `0`s but one non-zero product, when there is a `0` in the given numbers', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });

  it('should return the expected result', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
});
