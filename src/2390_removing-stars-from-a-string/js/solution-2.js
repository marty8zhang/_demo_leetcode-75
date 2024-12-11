/*
 * Notes:
 *   - This is not a stack solution.
 *   - This solution barely passes the complexity check.
 */
function removeStars(s) {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '*') count++;
    else if (count) {
      s = s.substring(0, i - count * 2) + s.substring(i);
      i -= count * 2;
      count = 0;
    }
  }

  if (count) s = s.substring(0, s.length - count * 2);

  return s;
}

export default removeStars;
