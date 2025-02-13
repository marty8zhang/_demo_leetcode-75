/*
 * Note: This solution fails the performance test due to its time complexity
 * being O(2^m), m < nums.length.
 */
export function rob(nums) {
  let max = 0;

  robNext(0, 0);
  robNext(1, 0);

  return max;

  function robNext(index, sum) {
    if (index > nums.length - 1) {
      if (sum > max) max = sum;
      return;
    }

    robNext(index + 2, sum + nums[index]);
    robNext(index + 3, sum + nums[index]);
  }
}
