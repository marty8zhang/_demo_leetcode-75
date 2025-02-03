/* This solution should work but fails the LeetCode performance check. */
export function successfulPairs(spells, potions, success) {
  const results = [];

  for (let i = 0; i < spells.length; i++) {
    const min = Math.ceil(success / spells[i]);
    results[i] = 0;

    for (let p of potions) {
      if (p >= min) results[i] += 1;
    }
  }

  return results;
}
