/*
 * Note: This solution fails the performance checks of LeetCode.
 */
export function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  });

  const paths = [[intervals[0]]];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    const noOfPaths = paths.length;
    for (let j = 0; j < noOfPaths; j++) {
      const path = paths[j];

      /* Chain */
      const lastInterval = path[path.length - 1];
      if (lastInterval[1] <= interval[0]) {
        path.push(interval);
        continue;
      }

      /* Replace the last interval */
      const secondLastInterval = path[path.length - 2];
      if (
        secondLastInterval &&
        secondLastInterval[1] <= interval[0] &&
        lastInterval[1] > interval[1]
      ) {
        lastInterval[0] = interval[0];
        lastInterval[1] = interval[1];
        continue;
      }

      /* Create new path */
      const newPath = [];
      for (let k = 0; k < path.length; k++) {
        if (path[k][1] <= interval[0]) newPath.push(path[k]);
        else {
          newPath.push(interval);
          paths.push(newPath);
          break;
        }
      }
    }
  }

  let maxLen = 0;
  for (let p of paths) if (p.length > maxLen) maxLen = p.length;

  return intervals.length - maxLen;
}
