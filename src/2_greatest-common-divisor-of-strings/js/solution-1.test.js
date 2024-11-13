import gcdOfStrings from './solution-1.js';

describe('gcdOfStrings()', () => {
  it('should return an empty string when there is no common divisor of the given strings', () => {
    expect(gcdOfStrings('ABC', 'DEF')).toBe('');
  });

  it('should return an empty string when there is no common divisor of the given strings, despite their similarities', () => {
    expect(gcdOfStrings('ABCDABC', 'ABC')).toBe('');
  });

  it('should return the expected result when the greatest common divisor is only one-char long', () => {
    expect(gcdOfStrings('AAAAA', 'A')).toBe('A');
  });

  it('should return the expected result when the is only one char keeps repeating in both strings with uneven lengths between them', () => {
    expect(gcdOfStrings('A'.repeat(7), 'A'.repeat(4))).toBe('A');
  });

  it('should return the expected result when there is only one char keeps repeating in both strings with even lengths between them', () => {
    expect(gcdOfStrings('A'.repeat(8), 'A'.repeat(6))).toBe('AA');
  });

  it('should return the expected result when a substring keeps repeating in both strings with uneven lengths between them', () => {
    expect(gcdOfStrings('ABC'.repeat(3), 'ABC'.repeat(2))).toBe('ABC');
  });

  it('should return the expected result when a substring keeps repeating in both strings with even lengths between them', () => {
    expect(gcdOfStrings('ABC'.repeat(4), 'ABC'.repeat(2))).toBe('ABCABC');
  });

  it('should return the expected result when one string keeps repeating in another string', () => {
    expect(gcdOfStrings('ABCDEFG'.repeat(3), 'ABCDEFG')).toBe('ABCDEFG');
  });
});
