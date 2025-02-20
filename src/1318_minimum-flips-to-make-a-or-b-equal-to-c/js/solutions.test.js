import { minFlips } from './solution-1.js';

describe('`minFlips()`', () => {
  it('should return `0`, if no flip is needed', () => {
    expect(minFlips(1, 2, 3)).toBe(0);
    expect(minFlips(2, 6, 6)).toBe(0);
  });

  it('should return the expected result, if flips are needed', () => {
    expect(minFlips(2, 6, 5)).toBe(3);
    expect(minFlips(4, 2, 7)).toBe(1);
  });
});
