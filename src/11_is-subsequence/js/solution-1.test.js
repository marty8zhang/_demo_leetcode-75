import isSubsequence from './solution-1.js';

describe('`isSubsequence()`', () => {
  it('should return `false`, when `t` is an empty string but `s` is not', () => {
    expect(isSubsequence('a', '')).toBe(false);
  });

  it('should return `false`, when `s` is not a subsequence of `t`', () => {
    expect(isSubsequence('acb', 'abcde')).toBe(false);
  });

  it('should return `true`, when `s` is an empty string but `t` is not', () => {
    expect(isSubsequence('', 'a')).toBe(true);
  });

  it('should return `true`, when both `t` and `s` are empty strings', () => {
    expect(isSubsequence('', '')).toBe(true);
  });

  it('should return `true`, when both `t` and `s` contain only the same character', () => {
    expect(isSubsequence('a', 'a')).toBe(true);
  });

  it('should return `true`, when both `t` and `s` are the same string', () => {
    expect(isSubsequence('abc', 'abc')).toBe(true);
  });

  it('should return `true`, when `s` is a substring of `t`', () => {
    expect(isSubsequence('bcd', 'abcde')).toBe(true);
  });

  it('should return `true`, when `s` is a subsequence of `t`', () => {
    expect(isSubsequence('ade', 'abcde')).toBe(true);
  });

  it('should return `true`, when `s` is a subsequence of `t` and there are repeating characters in `s`', () => {
    expect(isSubsequence('aad', 'aabbccddee')).toBe(true);
  });
});
