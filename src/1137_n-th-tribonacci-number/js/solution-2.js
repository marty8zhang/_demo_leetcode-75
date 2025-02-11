/*
 * Note: This solution derives from solution 1, in the effort of resolving the
 * conflicts between `tribNums` declaration and mutation in the recursive calls.
 */
export function tribonacci(n) {
  const tribNums = [0, 1, 1];

  return divideAndConquer(n, tribNums);

  function divideAndConquer(n, nums) {
    if (nums[n] === undefined)
      nums[n] =
        divideAndConquer(n - 3, nums) +
        divideAndConquer(n - 2, nums) +
        divideAndConquer(n - 1, nums);

    return nums[n];
  }
}
