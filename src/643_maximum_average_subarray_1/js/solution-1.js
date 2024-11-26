function findMaxAverage(nums, k) {
  const l = nums.length;
  let maxSum = -10 ^ 4;

  if (k === l) return nums.reduce((sum, v) => (sum += v), 0) / l;

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
