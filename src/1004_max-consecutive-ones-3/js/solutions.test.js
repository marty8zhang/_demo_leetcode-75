import longestOnes from './solution-1.js';

describe('`longestOnes()`', () => {
  it('should return `0`, when the length of `nums` is `0`', () => {
    expect(longestOnes([], 0)).toBe(0);
  });

  it('should return the greatest count of consecutive `1`s in `nums`, when `k` is `0`', () => {
    expect(longestOnes([1, 1, 0, 0, 1, 0, 1, 1, 1], 0)).toBe(3);
  });

  it('should return the length of `nums`, when `k` is equals the length', () => {
    expect(longestOnes([1, 1, 0, 0, 0, 1, 1, 1, 0], 9)).toBe(9);
  });

  it('should return the length of `nums`, when `k` is less the length but greater than the total number of `0`s in `nums`', () => {
    expect(longestOnes([1, 1, 0, 0, 0, 1, 1, 1, 0], 5)).toBe(9);
  });

  it('should return the expected result, when `k` is less than both the length of `nums` and the total number of `0`s in `nums` and the longest `1`s sit at the beginning of `nums`', () => {
    expect(
      longestOnes([1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1], 3),
    ).toBe(10);
  });

  it('should return the expected result, when `k` is less than both the length of `nums` and the total number of `0`s in `nums` and the longest `1`s sit in the middle of `nums`', () => {
    expect(
      longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
    ).toBe(10);
  });

  it('should return the expected result, when `k` is less than both the length of `nums` and the total number of `0`s in `nums` and the longest `1`s sit at the end of `nums`', () => {
    expect(
      longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1], 3),
    ).toBe(10);
  });
});
