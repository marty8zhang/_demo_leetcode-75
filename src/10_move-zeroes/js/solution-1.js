function moveZeroes(nums) {
  let counter = 0;

  for (let i = 0, j = 0; i < nums.length; i++) {
    if (nums[i] === 0) counter++;
    else nums[j++] = nums[i];
  }

  if (counter) nums.fill(0, nums.length - counter);
}

export default moveZeroes;
