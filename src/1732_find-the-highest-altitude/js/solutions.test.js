import largestAltitude from './solution-1.js';

describe('`largestAltitude()`', () => {
  it('should return the expect result, when the largest altitude is at the beginning of the trip', () => {
    expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
  });

  it('should return the expect result, when the largest altitude is in the middle of the trip', () => {
    expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
  });

  it('should return the expect result, when the largest altitude is at the end of the trip', () => {
    expect(largestAltitude([-100, 43, -10, 67, 1])).toBe(1);
  });
});
