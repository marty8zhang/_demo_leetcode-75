import { findKthLargest } from './solution-1.js';

describe('`findKthLargest()`', () => {
  it('should return the number, when there is only one number in the array', () => {
    expect(findKthLargest([-10000], 1)).toBe(-10000);
  });

  it('should return the expected result, when there are all distinct numbers in the array', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  it('should return the expected result, when there are all repeating numbers in the array', () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 5)).toBe(3);
  });
});
