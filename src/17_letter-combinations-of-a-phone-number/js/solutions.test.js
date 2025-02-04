import { letterCombinations } from './solution-1.js';

describe('`letterCombinations()`', () => {
  it('should return an empty array, when no digit is given', () => {
    expect(letterCombinations('')).toEqual([]);
  });

  it('should return the expected result, when only one digit is given', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
  });

  it('should return the expected result, when two digits are given', () => {
    expect(letterCombinations('23').sort()).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
  });
});
