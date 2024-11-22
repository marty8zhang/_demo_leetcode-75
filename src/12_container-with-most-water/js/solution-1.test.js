import maxArea from './solution-1.js';

describe('`maxArea()`', () => {
  it('should return `0`, when there are only two heights and one of them is `0`', () => {
    expect(maxArea([0, 10])).toBe(0);
  });

  it('should return the minimum height, when there are only two non-zero heights', () => {
    expect(maxArea([2, 10])).toBe(2);
  });

  it('should return the max area, when there are more than two heights and none is `0`', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it('should return the max area, when there are more than two heights and some are `0`s', () => {
    expect(maxArea([1, 8, 0, 2, 5, 4, 0, 3, 7])).toBe(49);
  });
});
