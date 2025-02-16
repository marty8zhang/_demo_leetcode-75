/* Note: This solution fails the LeetCode performance tests. */
export function uniquePaths(m, n) {
  let result = 1;

  move(m, n);

  return result;

  function move(m, n) {
    if (m > 1 && n > 1) {
      result++;
      move(m - 1, n);
      move(m, n - 1);
    }
  }
}
