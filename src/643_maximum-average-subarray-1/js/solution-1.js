/*
 * Note: This solution won't pass the complexity check.
 */
function findMaxAverage(nums, k) {
  const l = nums.length;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < l - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }

    if (sum > maxSum) maxSum = sum;
  }

  return maxSum / k;
}

export default findMaxAverage;
