function findMaxAverage(nums, k) {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let sum = maxSum;
  for (let i = 1; i < nums.length - k + 1; i++) {
    sum += nums[i + k - 1] - nums[i - 1];

    if (sum > maxSum) maxSum = sum;
  }

  return maxSum / k;
}

export default findMaxAverage;
