import moveZeroes from './solution-1.js';

describe('`moveZeroes()`', () => {
  it('should not modify the array, when there is only one `0` and nothing else in it', () => {
    let nums = [0];

    moveZeroes(nums);

    expect(nums).toEqual([0]);
  });

  it('should not modify the array, when there is only one non-zero integer in it', () => {
    let nums = [-1];

    moveZeroes(nums);

    expect(nums).toEqual([-1]);
  });

  it('should not modify the array, when there is no `0` among all integers', () => {
    let nums = [2, 3, 1, -1, 7];

    moveZeroes(nums);

    expect(nums).toEqual([2, 3, 1, -1, 7]);
  });

  it('should not modify the array, when there is one `0` and it is at the end', () => {
    let nums = [2, 3, 1, -1, 0];

    moveZeroes(nums);

    expect(nums).toEqual([2, 3, 1, -1, 0]);
  });

  it('should move the `0` to the end, when there is one `0`s and it is not at the end', () => {
    let nums = [2, 3, 0, -1, 7];

    moveZeroes(nums);

    expect(nums).toEqual([2, 3, -1, 7, 0]);
  });

  it('should move the `0`s to the end, when there are more than one `0`s', () => {
    let nums = [0, 3, 0, -1, 0];

    moveZeroes(nums);

    expect(nums).toEqual([3, -1, 0, 0, 0]);
  });
});
