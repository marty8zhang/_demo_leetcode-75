function pivotIndex(nums) {
  const l = nums.length;
  let pivot = -1;
  let leftSums = [0];
  let rightSums = [];
  rightSums[l - 1] = 0;

  for (let left = 0, right = l - 1; left < l; left++, right--) {
    leftSums[left + 1] = leftSums[left] + nums[left];
    rightSums[right - 1] = rightSums[right] + nums[right];

    if (left < right) continue;

    if (leftSums[right] === rightSums[right]) pivot = right;
    if (pivot < 0 && leftSums[left] === rightSums[left]) pivot = left;
  }

  return pivot;
}

export default pivotIndex;
