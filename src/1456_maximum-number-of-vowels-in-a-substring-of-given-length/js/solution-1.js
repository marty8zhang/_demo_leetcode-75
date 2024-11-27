function maxVowels(s, k) {
  const vowels = 'aeiou';

  let maxCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) maxCount++;
  }

  let count = maxCount;
  for (let i = 1; i < s.length - k + 1; i++) {
    if (vowels.includes(s[i - 1])) count--;
    if (vowels.includes(s[i + k - 1])) count++;

    if (count > maxCount) maxCount = count;
  }

  return maxCount;
}

export default maxVowels;
