export function letterCombinations(digits) {
  if (digits === '') return [];

  const letters = [
    null,
    null,
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  let result = Array.from(letters[digits[0]]);

  for (let i = 1; i < digits.length; i++) {
    const candidates = letters[digits[i]];
    const prevResult = result;
    result = [];
    for (let cand of candidates) {
      for (let pr of prevResult) {
        result.push(`${pr}${cand}`);
      }
    }
  }

  return result;
}
