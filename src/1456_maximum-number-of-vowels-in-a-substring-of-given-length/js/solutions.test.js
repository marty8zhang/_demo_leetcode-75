import maxVowels from './solution-1.js';

describe('`maxVowels()`', () => {
  it('should return `0`, when there is no vowel in the given string', () => {
    expect(maxVowels('bcdfjklmn', 1)).toBe(0);
  });

  it('should return the value of `k`, when there are all vowels in the given string', () => {
    expect(maxVowels('aeiou', 5)).toBe(5);
  });

  it('should return the expected max vowel count, when there are several vowels in the given string and `k` is greater than `1`', () => {
    expect(maxVowels('leetcode', 3)).toBe(2);
  });
});
