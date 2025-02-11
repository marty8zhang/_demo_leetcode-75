// import { tribonacci } from './solution-1.js';
import { tribonacci } from './solution-2.js';

describe('`tribonacci()`', () => {
  it('should return `2`, when `n` is `3`', () => {
    expect(tribonacci(3)).toBe(2);
  });

  it('should return `4`, when `n` is `4`', () => {
    expect(tribonacci(4)).toBe(4);
  });

  it('should return `1389537`, when `n` is `25`', () => {
    expect(tribonacci(25)).toBe(1389537);
  });

  it('should return `2082876103`, when `n` is `37`', () => {
    expect(tribonacci(37)).toBe(2082876103);
  });
});
