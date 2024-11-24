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

    const indexNeeded = nums.indexOf(k - nums[left], left + 1);
    if (indexNeeded > 0) {
      counter++;
      nums.splice(indexNeeded, 1);
      nums.splice(left, 1);
      right -= 2;
    } else {
      left++;
    }

    let i = right - 1;
    while (i >= left) {
      if (nums[i] + nums[right] === k) {
        counter++;
        nums.splice(right, 1);
        nums.splice(i, 1);
        right -= 2;
        i = right - 1;
      } else {
        i--;
      }
    }
  }

  return counter;
}

export default maxOperations;
