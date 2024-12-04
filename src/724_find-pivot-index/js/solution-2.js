function pivotIndex(nums) {
  const l = nums.length;

  let sum = 0;
  for (let n of nums) sum += n;

  let leftSum = 0;
  for (let i = 0; i < l; i++) {
    if (leftSum * 2 === sum - nums[i]) return i;

    leftSum += nums[i];
  }

  return -1;
}

export default pivotIndex;
