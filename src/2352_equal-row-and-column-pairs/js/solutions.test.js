import equalPairs from './solution-1.js';

describe('`equalPairs()`', () => {
  it('should return `0`, when there is no equal row and column pair', () => {
    expect(
      equalPairs([
        [3, 4, 1],
        [1, 7, 6],
        [2, 7, 7],
      ]),
    ).toBe(0);
  });

  it('should return the expected result, when there are equal row and column pairs and there are no duplicate rows or columns', () => {
    expect(
      equalPairs([
        [3, 2, 1, 3],
        [1, 7, 6, 2],
        [2, 7, 7, 1],
        [3, 1, 4, 3],
      ]),
    ).toBe(2);
  });

  it('should return the expected result, when there are equal row and column pairs and there are duplicate rows', () => {
    expect(
      equalPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 5],
        [2, 4, 2, 2],
        [2, 4, 2, 2],
      ]),
    ).toBe(3);
  });

  it('should return the expected result, when there are equal row and column pairs and there are duplicate columns', () => {
    expect(
      equalPairs([
        [3, 1, 2, 2],
        [1, 4, 4, 4],
        [2, 4, 2, 2],
        [2, 5, 2, 2],
      ]),
    ).toBe(3);
  });
});
