import removeStars from './solution-1.js';

describe('`removeStars()`', () => {
  it('should return the same string, when there is no star in the given one', () => {
    expect(removeStars('thereisnostar')).toBe('thereisnostar');
  });

  it('should return the expected result, when there are multiple non-repeating stars in the given string', () => {
    expect(removeStars('the*re*isnostar*')).toBe('thrisnosta');
  });

  it('should return the expected result, when there are repeating stars in the given string', () => {
    expect(removeStars('the***reisn**ostar**')).toBe('reiost');
  });
});
