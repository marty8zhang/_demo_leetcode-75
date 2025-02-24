/*
 * This solution derives from solution 2. The aim of it is to reduce its runtime
 * by reducing the number of variables/constants and the `else` branch in the
 * loop.
 */
export function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  const chain = [intervals[0]];

  for (let i = 1; i < intervals.length; i++)
    if (intervals[i][0] >= chain[chain.length - 1][1]) chain.push(intervals[i]);

  return intervals.length - chain.length;
}
