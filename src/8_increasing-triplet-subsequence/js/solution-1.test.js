import increasingTriplet from './solution-1.js';

describe('`increasingTriplet()`', () => {
  it('should return `false`, when no triplet exists among all positive integers', () => {
    expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
  });

  it('should return `false`, when no triplet exists and some integers are negative', () => {
    expect(increasingTriplet([5, 4, -3, 2, -1])).toBe(false);
  });

  it('should return `true`, when triplet exists in the first half of the integers', () => {
    expect(increasingTriplet([1, 4, 6, 2, 2, 1])).toBe(true);
  });

  it('should return `true`, when triplet exists in the second half of the integers', () => {
    expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
  });

  it('should return `true`, when triplet exists and some integers are negative', () => {
    expect(increasingTriplet([2, 1, 5, -1, 4, 6])).toBe(true);
  });
});
