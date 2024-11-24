function maxOperations(nums, k) {
  let counter = 0;
  let i = 0;

  while (i < nums.length - 1) {
    if (nums[i] >= k) {
      i++;
      continue;
    }

    const index = nums.indexOf(k - nums[i], i + 1);
    if (index > 0) {
      counter++;
      nums.splice(index, 1);
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return counter;
}

export default maxOperations;
