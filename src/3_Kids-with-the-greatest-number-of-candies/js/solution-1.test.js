import kidsWithCandies from './solution-1.js';

describe('kidsWithCandies()', () => {
  it('should return only one `true` when there is a significant number', () => {
    expect(kidsWithCandies([1, 2, 3, 10, 4], 3)).toEqual([
      false,
      false,
      false,
      true,
      false,
    ]);
  });

  it('should return more than one `true` when there is no significant number', () => {
    expect(kidsWithCandies([1, 2, 3, 5, 4], 3)).toEqual([
      false,
      true,
      true,
      true,
      true,
    ]);
  });

  it('should return more than one `true` when there are duplicate numbers', () => {
    expect(kidsWithCandies([3, 2, 3, 1, 1], 1)).toEqual([
      true,
      true,
      true,
      false,
      false,
    ]);
  });
});
