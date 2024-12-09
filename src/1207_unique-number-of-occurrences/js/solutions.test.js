import uniqueOccurrences from './solution-1.js';

describe('`uniqueOccurrences()`', () => {
  it('should return `true`, when there is only one integer in `arr`', () => {
    expect(uniqueOccurrences([123])).toBe(true);
  });

  it('should return `false`, when there are only two distinct integers in `arr`', () => {
    expect(uniqueOccurrences([1, 2])).toBe(false);
  });

  it('should return `true`, when there are more than two distinct integers and they each have different number of occurrences in `arr`', () => {
    expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true);
  });

  it('should return `false`, when there are more than two distinct integers and not all of them have different number of occurrences in `arr`', () => {
    expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0, -3])).toBe(
      false,
    );
  });
});
