// import { combinationSum3 } from './solution-1.js';
import { combinationSum3 } from './solution-2.js';

describe('`combinationSum3()`', () => {
  it('should return an empty array, when `n` is less than `3`', () => {
    expect(combinationSum3(2, 1)).toStrictEqual([]);
    expect(combinationSum3(2, 2)).toStrictEqual([]);
  });

  it('should return an empty array, when there can be no combination for the given `k` and `n`', () => {
    /* 1 + 2 + 3 + 4 = 10 */
    expect(combinationSum3(4, 9)).toStrictEqual([]);
    /* 8 + 9 = 17 */
    expect(combinationSum3(2, 18)).toStrictEqual([]);
  });

  it('should return the expected result, when there can be multiple combinations for the given `k` and `n`', () => {
    expect(combinationSum3(3, 9)).toStrictEqual([
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4],
    ]);
  });
});
