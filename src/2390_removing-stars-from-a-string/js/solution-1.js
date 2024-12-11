/*
 * Notes:
 *   - This is not a stack solution.
 *   - This solution fails the complexity check.
 */
function removeStars(s) {
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '*') {
      s = s.substring(0, i - 1) + s.substring(i + 1);
      i -= 2;
    }
  }

  return s;
}

export default removeStars;
