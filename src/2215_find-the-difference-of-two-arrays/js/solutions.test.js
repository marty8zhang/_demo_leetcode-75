import findDifference from './solution-2.js';

describe('`findDifference()`', () => {
  it('should return both arrays, when all of their items are distinct', () => {
    expect(findDifference([1, 2, 3], [4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });

  it('should return the first array as empty, when only `nums2` has distinct integers', () => {
    expect(findDifference([1, 3, 5], [1, 2, 3, 4, 5])).toEqual([[], [2, 4]]);
  });

  it('should return the second array as empty, when only `nums1` has distinct integers', () => {
    expect(findDifference([1, 2, 3, 4, 5], [2, 3, 4])).toEqual([[1, 5], []]);
  });

  it('should return the expected result, when both arrays have distinct integers', () => {
    expect(findDifference([1, 2, 3], [2, 4, 6])).toEqual([
      [1, 3],
      [4, 6],
    ]);
  });

  it('should return handle duplicated integers properly, when there are (non-)distinct but duplicated integers', () => {
    expect(findDifference([1, 2, 3, 2, 3, 2], [1, 1, 2, 2, 4])).toEqual([
      [3],
      [4],
    ]);
  });
});
