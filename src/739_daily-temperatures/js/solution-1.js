export function dailyTemperatures(temperatures) {
  const tempLen = temperatures.length;
  const result = new Array(tempLen).fill(0);

  const monotonicDescStackByTempIndex = [tempLen - 1];
  let prevTemp = temperatures[tempLen - 1];
  for (let i = tempLen - 2; i >= 0; i--) {
    const temp = temperatures[i];

    let count = 1;
    while (monotonicDescStackByTempIndex.length && prevTemp <= temp) {
      const index = monotonicDescStackByTempIndex.pop();
      count += result[index];
      prevTemp =
        temperatures[
          monotonicDescStackByTempIndex[
            monotonicDescStackByTempIndex.length - 1
          ]
        ];
    }
    if (!monotonicDescStackByTempIndex.length) count = 0;

    result[i] = count;
    monotonicDescStackByTempIndex.push(i);
    prevTemp = temp;
  }

  return result;
}
