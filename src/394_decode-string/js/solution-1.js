/*
 * Note: This solution only works with a single-digit `k`, hence it fails
 * LeetCode tests.
 */
export function decodeString(s) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) result = `${result}${s[i]}`;
    else {
      const decodedResult = decoding(s, i);
      result = `${result}${decodedResult.decodedString}`;
      i += decodedResult.originalLength - 1;
    }
  }

  return result;
}

function decoding(s, i) {
  if (isNaN(s[i])) throw new Error('Invalid encoded string start.');

  let decodingString = '';
  for (let j = i + 2; j < s.length; j++) {
    if (!isNaN(s[j])) {
      const nestedDecodingResult = decoding(s, j);
      decodingString = `${decodingString}${nestedDecodingResult.decodedString}`;
      j += nestedDecodingResult.originalLength - 1;
      continue;
    }

    if (s[j] === ']') {
      return {
        decodedString: decodingString.repeat(s[i]),
        originalLength: j - i + 1,
      };
    }

    decodingString = `${decodingString}${s[j]}`;
  }

  throw new Error('Invalid encoded string end.');
}
