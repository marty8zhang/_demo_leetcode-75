import closeStrings from './solution-1.js';

describe('`()`', () => {
  it('should return `false`, when the lengths of the two words are not equal', () => {
    expect(closeStrings('a', 'aa')).toBe(false);
  });

  it('should return `false`, when one word contains characters that the other word does not have', () => {
    expect(closeStrings('abc', 'bcd')).toBe(false);
  });

  it('should return `false`, when the numbers of character occurrences do not match', () => {
    expect(closeStrings('abcbbc', 'cbaabc')).toBe(false);
  });

  it('should return `true`, when the characters are not duplicating in either words', () => {
    expect(closeStrings('abcdef', 'fbaedc')).toBe(true);
  });

  it('should return `true`, when the characters are duplicating in either words', () => {
    expect(closeStrings('cabbba', 'abbccc')).toBe(true);
  });
});
