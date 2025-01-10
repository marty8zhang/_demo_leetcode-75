import { decodeString } from './solution-1.js';

describe('`decodeString()`', () => {
  it('should return the original string, when there is nothing to decode', () => {
    expect(decodeString('abcd')).toBe('abcd');
  });

  it('should return the decoded string, when there is only one char to be decoded', () => {
    expect(decodeString('ab2[c]d')).toBe('abccd');
  });

  it('should return the decoded string, when there is only a single decoding needed and it involves multiple chars', () => {
    expect(decodeString('a3[bc]d')).toBe('abcbcbcd');
  });

  it('should return the decoded string, when there are consecutive decoding needed', () => {
    expect(decodeString('a2[bc]3[d]e')).toBe('abcbcddde');
  });

  it('should return the decoded string, when there are multiple decoding needed on the same level', () => {
    expect(decodeString('a2[b]cd3[ef]g')).toBe('abbcdefefefg');
  });

  it('should return the decoded string, when there are nested decoding needed', () => {
    expect(decodeString('a2[bc3[de]f]g')).toBe('abcdededefbcdededefg');
  });
});
