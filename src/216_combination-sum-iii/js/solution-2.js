export function combinationSum3(k, n) {
  const result = [];

  findCombination(1, [], 0);

  return result;

  function findCombination(num, comb, sum) {
    if (sum > n || comb.length > k) return;

    if (comb.length === k && sum === n) {
      result.push([...comb]);
      return;
    }

    for (let i = num; i <= 9; i++)
      findCombination(i + 1, [...comb, i], sum + i);
  }
}
