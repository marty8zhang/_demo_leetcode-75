export function mergeAlternately(string1, string2) {
  let result = '';
  let i = 0;

  while (string1[i] && string2[i]) {
    result += string1[i] + string2[i];
    i += 1;
  }

  if (string1.length > string2.length) {
    result += string1.substring(i);
  } else if (string1.length < string2.length) {
    result += string2.substring(i);
  }

  return result;
}
