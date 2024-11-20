function increasingTriplet(nums) {
  const l = nums.length;
  const minsOnLeft = [nums[0]];
  const maxsOnRight = [];
  maxsOnRight[l - 1] = nums[l - 1];

  for (let i = 1, j = l - 2; i < l - 1, j > 0; i++, j--) {
    if (i <= j) {
      if (nums[i] > minsOnLeft[i - 1] && nums[i] < maxsOnRight[j + 1])
        return true;
    } else {
      if (nums[i] > minsOnLeft[i - 1] && nums[i] < maxsOnRight[i + 1])
        return true;
      if (nums[j] > minsOnLeft[j - 1] && nums[j] < maxsOnRight[j + 1])
        return true;
    }

    minsOnLeft[i] = minsOnLeft[i - 1] < nums[i] ? minsOnLeft[i - 1] : nums[i];
    maxsOnRight[j] =
      maxsOnRight[j + 1] > nums[j] ? maxsOnRight[j + 1] : nums[j];
  }

  return false;
}

export default increasingTriplet;
