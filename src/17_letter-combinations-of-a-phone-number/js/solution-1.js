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
  const result = Array.from(letters[digits[0]]);
  let previousLength = 1;

  for (let i = 1; i < digits.length; i++) {
    const candidates = letters[digits[i]];
    const length = result.length;
    previousLength *= letters[digits[i - 1]].length;
    for (let j = 0; j < candidates.length; j++) {
      for (let k = length - previousLength; k < length; k++) {
        result.push(result[k] + candidates[j]);
      }
    }
  }

  return result.splice(
    result.length - previousLength * letters[digits[digits.length - 1]].length,
  );
}
