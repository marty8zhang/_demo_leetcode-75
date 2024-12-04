import pivotIndex from './solution-1.js';

describe('`pivotIndex()`', () => {
  it('should return `-1`, when there is no pivot index in `nums`', () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1);
  });

  it('should return `0`, when the pivot index is at the left edge of `nums`', () => {
    expect(pivotIndex([2, 1, -1])).toBe(0);
  });

  it('should return the last index of `nums`, when the pivot index is at the right edge of `nums`', () => {
    expect(pivotIndex([-2, 2, 3])).toBe(2);
  });

  it('should return the expected value, when the pivot index is in the middle of `nums`', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
  });
});
