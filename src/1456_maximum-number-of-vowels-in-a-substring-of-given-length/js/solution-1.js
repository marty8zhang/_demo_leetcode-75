function maxVowels(s, k) {
  const vowels = 'aeiou';

  let maxCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.indexOf(s[i]) >= 0) maxCount++;
  }

  let count = maxCount;
  for (let i = 1; i < s.length - k + 1; i++) {
    if (vowels.indexOf(s[i - 1]) >= 0) count--;
    if (vowels.indexOf(s[i + k - 1]) >= 0) count++;

    if (count > maxCount) maxCount = count;
  }

  return maxCount;
}

export default maxVowels;
