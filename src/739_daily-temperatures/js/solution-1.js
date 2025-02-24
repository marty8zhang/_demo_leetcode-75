/*
 * Intuition:
 * 1. Loop through temperatures from the end to the start.
 * 2. While looping, use a monotonic stack to store temperatures in the
 *    descending order by their original indexes. E.g.,
 *    `temps = [..., 50, 70, 100]`
 *    =>
 *    `mntStack = [temps.length - 1, temps.length - 2, temps.length - 3, ...]`.
 * 3. If `temps[i] < temps[i+1]`, `result[i] = 1`.
 * 4. Otherwise,
 *    1. Keep `pop()`ing the stack, until the last temperature being greater
 *       than `temps[i]` or until nothing left in the stack.
 *    2. Used the popped index to get the number of days needed to reach the
 *       next higher temperature from `result`.
 *    3. Sums the days up and set it to `result[i]`.
 * 5. `push()` `i` to the stack to maintain the descending order and to help
 *    with the calculation in the next iteration.
 *
 * For example, given
 *   |  Index | Temp  | Result (days)     |
 *   |  5     | 100   | 0                 |
 *   |  4     | 76    | 1 = Index 4 => 5  |
 *   |  3     | 46    | 1                 |
 *   |  2     | 70    | 2 = Index 2 => 4  |
 *   |  1     | 62    | 1 = Index 1 => 2  |
 *   |  0     | 89    | ?                 |
 * By the time when the loop reaches `i = 0`, the stack will be `[5, 4, 2, 1]`,
 * which corresponds to the temperatures of `[100, 76, 70, 62]`, then
 * `result[0] = Index 0 => 1 + result[1] + result[2] + result[4]
 * = 1 + 1 + 2 + 1 = 5`.
 */
export function dailyTemperatures(temperatures) {
  const tempLen = temperatures.length;
  const result = new Array(tempLen).fill(0);

  const monotonicDescStackByTempIndex = [tempLen - 1];
  for (let i = tempLen - 2; i >= 0; i--) {
    let count = 1;
    while (
      monotonicDescStackByTempIndex.length &&
      temperatures[
        monotonicDescStackByTempIndex[monotonicDescStackByTempIndex.length - 1]
      ] <= temperatures[i]
    )
      count += result[monotonicDescStackByTempIndex.pop()];
    if (!monotonicDescStackByTempIndex.length) count = 0;

    result[i] = count;
    monotonicDescStackByTempIndex.push(i);
  }

  return result;
}
