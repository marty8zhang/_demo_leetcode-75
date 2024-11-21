function isSubsequence(s, t) {
  if (!s.length || s === t) return true;
  /*
   * Personally prefer the version below, but it's not as efficient as the
   * above line.
   */
  // if (t.includes(s)) return true;

  for (let i = 0, j = 0; i < t.length; i++) {
    if (t[i] === s[j]) j++;

    if (j === s.length) return true;
  }

  return false;
}

export default isSubsequence;
