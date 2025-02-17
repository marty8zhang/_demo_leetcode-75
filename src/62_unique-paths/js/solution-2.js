export function uniquePaths(m, n) {
  let result = new Array(m).fill(new Array(n).fill(1));

  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++)
      result[i][j] = result[i - 1][j] + result[i][j - 1];

  return result[m - 1][n - 1];
}
