export function countBits(n) {
  const result = [0];

  for (let i = 1; i <= n; i++) {
    if (Number.isInteger(Math.log2(i))) result[i] = 1;
    else {
      const baseIndex = Math.pow(2, Math.floor(Math.log2(i)));
      result[i] = result[baseIndex] + result[i - baseIndex];
    }
  }

  return result;
}
