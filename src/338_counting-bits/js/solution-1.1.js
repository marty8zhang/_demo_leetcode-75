export function countBits(n) {
  const result = [0];

  let baseIndex = 1;
  for (let i = 1; i <= n; i++) {
    if (baseIndex * 2 === i) baseIndex = i;
    /*
     * Notes: Because `baseIndex` is always a power of `2`,
     *   - `result[baseIndex] === 1`.
     *   - when `i` is a power of `2`, `i - baseIndex === 0`.
     */
    result[i] = 1 + result[i - baseIndex];
  }

  return result;
}
