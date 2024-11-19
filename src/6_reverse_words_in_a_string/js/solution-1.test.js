import reverseWords from './solution-1.js';

describe('reverseWords()', () => {
  it('should return the same word, when there is only one word in the given string', () => {
    expect(reverseWords('test')).toBe('test');
  });

  it('should trim leading and trailing spaces in the given string', () => {
    expect(reverseWords('   test  ')).toBe('test');
  });

  it('should reverse words in the given string', () => {
    expect(reverseWords('This is a test')).toBe('test a is This');
  });

  it('should reverse words and remove additional spaces in the given string', () => {
    expect(reverseWords('This  is a   test')).toBe('test a is This');
  });
});
