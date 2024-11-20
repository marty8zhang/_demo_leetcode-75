import compress from './solution-1.js';

describe('`compress()`', () => {
  it('should return `1`, when there is only one character in the given array', () => {
    expect(compress(['a'])).toBe(1);
  });

  it('should return the expected result, when there are multiple characters in the given array but none of them repeats', () => {
    expect(compress(['a', 'B', '!', '3'])).toBe(4);
  });

  it('should return the expected result, when there are multiple characters in the given array but only one needs to be compressed', () => {
    expect(compress(['a', 'B', 'B', 'B', '!', '3'])).toBe(5);
  });

  it('should return the expected result, when there are multiple characters in the given array and more than one need to be compressed', () => {
    expect(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c'])).toBe(6);
  });

  it('should return the expected result, when there are multiple characters in the given array and at least one repeats more than `9` times', () => {
    expect(
      compress([
        'a',
        'a',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
        'b',
      ]),
    ).toBe(5);
  });
});
