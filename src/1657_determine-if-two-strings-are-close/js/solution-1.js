function closeStrings(word1, word2) {
  if (word1.length !== word2.length) return false;

  const word1Map = new Map();
  const word2Map = new Map();
  for (let i = 0; i < word1.length; i++) {
    word1Map.set(word1[i], (word1Map.get(word1[i]) ?? 0) + 1);
    word2Map.set(word2[i], (word2Map.get(word2[i]) ?? 0) + 1);
  }

  for (let entry of word1Map) {
    if (!word2Map.has(entry[0])) return false;
  }

  function sortNumbers(a, b) {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  }

  const occurrences1 = Array.from(word1Map.values()).sort(sortNumbers);
  const occurrences2 = Array.from(word2Map.values()).sort(sortNumbers);
  for (let i = 0; i < occurrences1.length; i++) {
    if (occurrences1[i] !== occurrences2[i]) return false;
  }

  return true;
}

export default closeStrings;
