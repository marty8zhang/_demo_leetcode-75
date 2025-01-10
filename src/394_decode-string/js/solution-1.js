/*
 * Note: This isn't a stack solution.
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

  let j = i + 1;
  let times = s[i];
  for (; j < s.length; j++) {
    if (isNaN(s[j])) break;
    times = `${times}${s[j]}`;
  }

  let decodingString = '';
  for (let k = j + 1; k < s.length; k++) {
    if (!isNaN(s[k])) {
      const nestedDecodingResult = decoding(s, k);
      decodingString = `${decodingString}${nestedDecodingResult.decodedString}`;
      k += nestedDecodingResult.originalLength - 1;
      continue;
    }

    if (s[k] === ']') {
      return {
        decodedString: decodingString.repeat(Number.parseInt(times)),
        originalLength: k - i + 1,
      };
    }

    decodingString = `${decodingString}${s[k]}`;
  }

  throw new Error('Invalid encoded string end.');
}
