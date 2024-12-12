// import removeStars from './solution-1.js';
// import removeStars from './solution-2.js';
import removeStars from './solution-3.js';

describe('`removeStars()`', () => {
  it('should return the same string, when there is no star in the given one', () => {
    expect(removeStars('thereisnostar')).toBe('thereisnostar');
  });

  it('should return the expected result, when there are multiple non-repeating stars in the given string', () => {
    expect(removeStars('the*re*arestars*')).toBe('thrarestar');
  });

  it('should return the expected result, when there are repeating stars in the given string', () => {
    expect(removeStars('the***reare**stars**')).toBe('reasta');
  });

  it('should return the expected result, when there are repeating stars in the given string, but not all can be removed in a sequential order', () => {
    expect(removeStars('t*herea*re***stars**')).toBe('hersta');
  });
});
