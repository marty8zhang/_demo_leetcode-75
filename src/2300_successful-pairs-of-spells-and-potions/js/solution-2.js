export function successfulPairs(spells, potions, success) {
  const results = [];

  potions.sort((a, b) => a - b);

  for (let i = 0; i < spells.length; i++) {
    const min = Math.ceil(success / spells[i]);
    let minJ = 0;
    let maxJ = potions.length - 1;

    if (potions[minJ] >= min) {
      results[i] = potions.length;
      continue;
    }
    if (potions[maxJ] < min) {
      results[i] = 0;
      continue;
    }

    let currentJ;
    while (true) {
      currentJ = Math.floor((minJ + maxJ) / 2);
      if (potions[currentJ] < min && potions[currentJ + 1] >= min) {
        currentJ++;
        break;
      }

      if (potions[currentJ] < min) minJ = currentJ;
      else maxJ = currentJ;
    }

    results[i] = potions.length - currentJ;
  }

  return results;
}
