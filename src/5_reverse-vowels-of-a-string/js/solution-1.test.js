import reverseVowels from './solution-1.js';

describe('reverseVowels()', () => {
  it('should return the same string when there is no vowel in the string', () => {
    expect(reverseVowels('1234567890bcdfghjklmnpqrstvwxyz')).toBe(
      '1234567890bcdfghjklmnpqrstvwxyz',
    );
  });

  it('should return the same string when there is only one repeating vowel in the string', () => {
    expect(reverseVowels('aa1aa2aa')).toBe('aa1aa2aa');
  });

  it.each([
    ['abcd'],
    ['bcde'],
    ['ghij'],
    ['opqr'],
    ['stuv'],
    ['ABCD'],
    ['BCDE'],
    ['GHIJ'],
    ['OPQR'],
    ['STUV'],
  ])(
    'should return the same string when there is only one vowel in the string',
    (s) => {
      expect(reverseVowels(s)).toBe(s);
    },
  );

  it('should swap the vowels as expected when there are an even number of vowels', () => {
    expect(reverseVowels('IceCreAm')).toBe('AceCreIm');
  });

  it('should swap the vowels as expected when there are an odd number of vowels', () => {
    expect(reverseVowels('AIceCreAm')).toBe('AeceCrIAm');
  });
});
