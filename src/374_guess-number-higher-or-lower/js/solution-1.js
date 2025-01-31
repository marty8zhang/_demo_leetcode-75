export function guessNumber(n) {
  let min = 1;
  let max = n;
  let current = Math.floor((min + max) / 2);

  while (true) {
    switch (guess(current)) {
      case 1:
        min = current + 1;
        current = Math.ceil((min + max) / 2);
        break;
      case -1:
        max = current - 1;
        current = Math.floor((min + max) / 2);
        break;
      case 0:
      default:
        return current;
    }
  }
}

function guess(num) {
  /* Test case #1 */
  const pick = 6;
  /* Test case #2 and #3 */
  // const pick = 1;
  if (num > pick) return -1;
  if (num < pick) return 1;
  return 0;
}
