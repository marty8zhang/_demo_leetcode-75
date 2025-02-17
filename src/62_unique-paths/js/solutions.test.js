// import { uniquePaths } from './solution-1.js';
import { uniquePaths } from './solution-2.js';

describe('`uniquePaths()`', () => {
  it('should return `1`, when both `m` and `n` are `1`', () => {
    expect(uniquePaths(1, 1)).toBe(1);
  });

  it('should return `1`, when `m` is `1` and `n` is `2`', () => {
    expect(uniquePaths(1, 2)).toBe(1);
  });

  it('should return `1`, when `m` is `2` and `n` is `1`', () => {
    expect(uniquePaths(2, 1)).toBe(1);
  });

  it('should return `2`, when both `m` and `n` are `2`', () => {
    expect(uniquePaths(2, 2)).toBe(2);
  });

  it('should return `3`, when `m` is `3` and `n` is `2`', () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });

  it('should return `28`, when `m` is `3` and `n` is `7`', () => {
    expect(uniquePaths(3, 7)).toBe(28);
  });

  it('should return `1,916,797,311`, when `m` is `51` and `n` is `9`', () => {
    expect(uniquePaths(51, 9)).toBe(1916797311);
  });
});
