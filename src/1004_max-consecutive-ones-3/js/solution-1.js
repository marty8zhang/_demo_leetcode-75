function longestOnes(nums, k) {
  let numberOfFlips = k;
  let maxCount = 0;
  let isNewStart = false;
  let count = 0;
  let nextStart;
  for (let i = 0; i < nums.length; i++) {
    if (!isNewStart) {
      if (nums[i - 1] === 1) continue;

      isNewStart = true;
    }

    if (nums[i] === 1) count++;
    else if (numberOfFlips) {
      if (k && numberOfFlips === k) nextStart = i;

      count++;
      numberOfFlips--;
    } else {
      if (count > maxCount) maxCount = count;

      if ((k ? nextStart : i) + maxCount >= nums.length) break;

      numberOfFlips = k;
      isNewStart = false;
      count = 0;

      if (k) i = nextStart;
    }
  }

  if (count > maxCount) maxCount = count;

  return maxCount;
}

export default longestOnes;
