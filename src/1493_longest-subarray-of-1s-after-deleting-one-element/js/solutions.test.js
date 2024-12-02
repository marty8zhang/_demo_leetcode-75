import longestSubarray from './solution-1.js';

describe('`longestSubarray()`', () => {
  it('should return `0`, when there are only `0`s in `nums`', () => {
    expect(longestSubarray([0, 0, 0])).toBe(0);
  });

  it('should return the length of `nums` minus `1`, when there is no `0` in `nums`', () => {
    expect(longestSubarray([1, 1, 1])).toBe(2);
  });

  it('should return the total number of `1`s in `nums`, when there is only one `0` in `nums`', () => {
    expect(longestSubarray([1, 1, 0, 1])).toBe(3);
  });

  it('should return the total number of `1`s in `nums`, when there are all `0`s except the consecutive `1`s', () => {
    expect(longestSubarray([0, 0, 0, 1, 1, 1, 1, 0, 0])).toBe(4);
  });

  it('should return the expected count, when there is no consecutive `0`s in `nums`', () => {
    expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5);
  });

  it('should return the expected count, when there are consecutive `0`s in `nums`', () => {
    expect(longestSubarray([0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1])).toBe(4);
  });
});
