/*
 * This solution derives from solution 1. Since the index of the potential next
 * warmer temperature is already stored in the stack, the number of days needed
 * can be easily obtained by doing a single subtraction between the two indexes.
 */
export function dailyTemperatures(temperatures) {
  const tempLen = temperatures.length;
  const result = new Array(tempLen).fill(0);

  const monotonicDescStackByTempIndex = [];
  for (let i = tempLen - 1; i >= 0; i--) {
    while (
      monotonicDescStackByTempIndex.length &&
      temperatures[
        monotonicDescStackByTempIndex[monotonicDescStackByTempIndex.length - 1]
      ] <= temperatures[i]
    )
      monotonicDescStackByTempIndex.pop();

    if (monotonicDescStackByTempIndex.length)
      result[i] =
        monotonicDescStackByTempIndex[
          monotonicDescStackByTempIndex.length - 1
        ] - i;

    monotonicDescStackByTempIndex.push(i);
  }

  return result;
}
