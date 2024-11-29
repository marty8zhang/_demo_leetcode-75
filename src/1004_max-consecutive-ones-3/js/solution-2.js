/*
 * - Keeps expanding the "window" from the right.
 *   - If `right` encounters a `0`, flip it.
 * - If `0`s have been `over`-flipped (`k < 0`), reducing the "window" from the
 *   left. This result in a "sliding window", because both `left` and `right`
 *   will be increased by `1`.
 *   - If `left` encounters a `0` (previously flipped), restores the flip count
 *     by `1`.
 * - Notes:
 *   - The final/additional expanding at the end of the loop - the `right++`
 *     which results in `right === nums.length` - is necessary for calculating
 *     the "window" size based on indexes inclusively. E.g., If from `nums[9]`
 *     to `nums[18]` are all `1`s (some might have been flipped from `0`),
 *     then `(18 + 1) - 9 = 10` is the correct answer.
 *   - At the end of the loop, for any "window" size `> 1`, it's possible that
 *     `k < -1`. The greater the "window" size, the smaller `k` can possibly be.
 *     For example, with `k < 0` (sliding criteria) and a size `2` "window" at
 *     `[..., x (left), 1 (right), 0]`, the next move will result in `k--`.
 */
function longestOnes(nums, k) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] === 0) k--;

    if (k < 0) {
      if (nums[left] === 0) k++;

      left++;
    }

    right++;
  }

  return right - left;
}

export default longestOnes;
