/*
 * Note: `tribNums` needs to be mutated, hence the declaration of it must be
 * outside the function that is being recursively called.
 */
const tribNums = [0, 1, 1];

export function tribonacci(n) {
  if (tribNums[n] === undefined)
    tribNums[n] = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);

  return tribNums[n];
}
