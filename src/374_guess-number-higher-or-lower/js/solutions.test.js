import { guessNumber } from './solution-1.js';

/*
 * The test cases here can only run one-by-one according to the value of `const
 * pick` inside `guess()`.
 */
describe('`guessNumber()`', () => {
  /* Test case #1 */
  it('should return `6`, when `n` is `10` and `pick` is `6`', () => {
    expect(guessNumber(10)).toBe(6);
  });

  /* Test case #2 */
  // it('should return `1`, when `n` is `1` and `pick` is `1`', () => {
  //   expect(guessNumber(1)).toBe(1);
  // });

  /* Test case #3 */
  // it('should return `1`, when `n` is `2` and `pick` is `1`', () => {
  //   expect(guessNumber(2)).toBe(1);
  // });
});
