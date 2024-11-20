function reverseVowels(s) {
  const vowels = 'aeiouAEIOU';
  const foundIndexes = [];
  const foundVowels = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      foundIndexes.push(i);
      foundVowels.push(s[i]);
    }
  }

  if (foundVowels.length <= 1) return s;

  return foundIndexes.reduce(
    (accumulator, i) =>
      accumulator.slice(0, i) + foundVowels.pop() + accumulator.slice(i + 1),
    s,
  );
}

export default reverseVowels;
