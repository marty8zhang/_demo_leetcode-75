import findMaxAverage from './solution-2.js';

describe('`findMaxAverage()`', () => {
  it('should return the same integer from the given array, when both `k` and the length of `nums` equal `1`', () => {
    expect(findMaxAverage([7], 1)).toBe(7);
  });

  it('should return the greatest integer from the given array, when `k` equals `1`', () => {
    expect(findMaxAverage([1, 3, 10, 9, 7, -11], 1)).toBe(10);
  });

  it('should return the expected average, when `k` equals the length of `nums` and `k` is greater than `1`', () => {
    expect(findMaxAverage([1, 2, 2], 3)).toBeCloseTo(1.66667, 5);
  });

  it('should return the expected average, when both `k` and the length of `nums` are greater than `1`', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75, 5);
  });
});
