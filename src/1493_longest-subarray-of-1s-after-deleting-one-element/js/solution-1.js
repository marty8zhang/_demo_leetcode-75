import longestOnes from '../../1004_max-consecutive-ones-3/js/solution-2.js';

/*
 * Similar to solution 2 of "1004. Max Consecutive Ones III", but instead of
 * flipping `0`s, we're deleting elements - `0`(s) and/or `1`(s), hence `- k`
 * before returning.
 */
function longestSubarray(nums) {
  /* The short version. */
  let k = 1;

  return longestOnes(nums, k) - k;

  /* The long version. */
  // let left = 0;
  // let right = 0;
  // let k = 1;
  //
  // while (right < nums.length) {
  //   if (nums[right] === 0) k--;
  //
  //   if (k < 0) {
  //     if (nums[left] === 0) k++;
  //
  //     left++;
  //   }
  //
  //   right++;
  // }
  //
  // return right - left - 1;
}

export default longestSubarray;
