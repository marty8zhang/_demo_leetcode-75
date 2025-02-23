/*
 * Intuition: This solution uses a dynamic programming approach.
 *
 * 1. Sort the intervals so that they're in the ascending order by `end`s.
 * 2. When `interval[n]` (`endOfChain`) and `interval[n + 1]` overlap, as long
 *    as `interval[n + 2]` can be attached to `interval[n]` (`endOfChain`), it's
 *    guaranteed that the solution will result in the longest chained intervals
 *    possible. In other words, the overlapping `interval[n + 1]` should be
 *    removed.
 * 3. So on and forth.
 */
export function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let endOfChain = intervals[0];

  for (let i = 1; i < intervals.length; i++)
    if (intervals[i][0] < endOfChain[1]) count++;
    else endOfChain = intervals[i];

  return count;
}
