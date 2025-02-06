export function combinationSum3(k, n) {
  if (n < 3) return [];

  const nums = Array.from({ length: 10 }, (v, i) => i);
  nums.shift();

  let combinations = new Map();
  for (let num of nums) {
    combinations.set(num.toString(), [num]);
  }

  for (let i = 1; i < k; i++) {
    const prevCombinations = new Map(combinations);
    combinations = new Map();
    for (let num of nums) {
      for (let pr of prevCombinations.values()) {
        if (pr.includes(num)) continue;

        let prSum = 0;
        for (let v of pr) prSum += v;
        if (num + prSum > n) continue;

        const combination = Array.from(pr);
        combination.push(num);
        combination.sort((a, b) => a - b);
        combinations.set(combination.join(''), combination);
      }
    }
  }

  let result = [];
  for (let combination of combinations.values()) {
    let sum = 0;
    for (let v of combination) sum += v;
    if (sum === n) result.push(combination);
  }

  return result;
}
