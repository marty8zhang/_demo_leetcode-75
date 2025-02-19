import { longestCommonSubsequence } from './solution-1.js';

describe('`longestCommonSubsequence()`', () => {
  it('should return `0`, when the two strings have no common subsequence', () => {
    expect(longestCommonSubsequence('abc', 'def')).toBe(0);
  });

  it('should return the length of the string, when the two strings are the same', () => {
    expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
  });

  it('should return the expected result, when the two strings have common subsequences', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
    expect(longestCommonSubsequence('bl', 'yby')).toBe(1);
    expect(longestCommonSubsequence('psnw', 'vozsh')).toBe(1);
  });

  it('should return the expected result, when the two strings have repeating characters and have common subsequences', () => {
    expect(longestCommonSubsequence('bdcecad', 'abbcd')).toBe(3);
  });
});
