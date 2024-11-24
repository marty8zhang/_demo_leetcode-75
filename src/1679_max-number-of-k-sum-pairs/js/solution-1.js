function maxOperations(nums, k) {
  let counter = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] >= k) {
      left++;
    }

    if (nums[right] >= k) {
      right--;
    }

    let index = nums.indexOf(k - nums[left], left + 1);
    if (index > 0) {
      counter++;
      nums.splice(index, 1);
      nums.splice(left, 1);
      right -= 2;
    } else {
      left++;
    }

    index = nums.indexOf(k - nums[right]);
    if (index >= 0 && index < right) {
      counter++;
      nums.splice(right, 1);
      nums.splice(index, 1);
      right -= 2;
    } else {
      right--;
    }
  }

  return counter;
}

export default maxOperations;
