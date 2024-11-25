import maxOperations from './solution-3.js';

describe('`maxOperations()`', () => {
  it('should return `0`, when there is only one number in the given array', () => {
    expect(maxOperations([6], 6)).toBe(0);
  });

  it('should return `0`, when there is no pair in the given array that can be summed up to the given `k`', () => {
    expect(maxOperations([1, 2, 3, 6], 6)).toBe(0);
  });

  it('should return `1`, when there are only two numbers in the given array and they can be summed up to the given `k`', () => {
    expect(maxOperations([1, 5], 6)).toBe(1);
  });

  it('should return `1`, when there is one pair in the given array and they can be summed up to the given `k`', () => {
    expect(maxOperations([1, 2, 3, 5], 6)).toBe(1);
  });

  it('should return the expected result, when there are several pairs in the given array and they can be summed up to the given `k`', () => {
    expect(
      maxOperations(
        [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2],
        3,
      ),
    ).toBe(4);
  });
});
