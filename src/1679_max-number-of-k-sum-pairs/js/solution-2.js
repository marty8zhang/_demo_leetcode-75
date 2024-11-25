function maxOperations(nums, k) {
  const sortedNums = nums.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });
  let counter = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (sortedNums[right] >= k) {
      right--;
      continue;
    }

    const sum = sortedNums[left] + sortedNums[right];
    if (sum < k) left++;
    else if (sum > k) right--;
    else {
      counter++;
      left++;
      right--;
    }
  }

  return counter;
}

export default maxOperations;
