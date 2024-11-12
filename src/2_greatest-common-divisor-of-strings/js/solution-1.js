export function gcdOfStrings(str1, str2) {
  const maxGcdLen = Math.min(str1.length, str2.length);
  let gcd = '';
  let cd = str1[0];

  while (cd.length < maxGcdLen) {
    if (
      str1.replaceAll(cd, '').length === 0 &&
      str2.replaceAll(cd, '').length === 0
    )
      gcd = cd;
    cd = str1.substring(0, cd.length + 1);
  }

  /*
   * In case `str1` is shorter, the length of `cd` won't be increased at the end
   * of the `while` loop, then it won't be possible to terminate the loop with
   * `cd.length <= maxGcdLen`. Hence, it'll be more efficient to test the full
   * length of `str1` outside the loop for the last time. By this means, which
   * string is shorter between `str1` and `str2` doesn't matter in this
   * algorithm.
   */
  if (
    str1.replaceAll(cd, '').length === 0 &&
    str2.replaceAll(cd, '').length === 0
  )
    gcd = cd;

  return gcd;
}

export default gcdOfStrings;
