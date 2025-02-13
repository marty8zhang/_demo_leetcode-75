/*
 * Intuition:
 *   - For each house, keep two plans - `didNotRob` and `mightRob`, to indicate
 *     what happened to the previous house.
 *   - Then for the next house, check if it's worthy to rob it or not -
 *     `max(didNotRob + current, mightRob)` -, then stores the result as the new
 *     `mightRob`.
 *   - Stores the old `mightRob` as the new `didNotRob`.
 *   - After all houses have been gone through, check which plan is better and
 *     return it.
 *   - By this means, the algorithm only needs to look forwards, because the
 *     best potential options for all the past houses have already been obtained
 *     within the two plans. In other words, the problem can be resolved one
 *     house at a time, which satisfies the concept of Dynamic Programming.
 */
export function rob(nums) {
  let didNotRob = 0,
    mightRob = 0;

  for (let n of nums) {
    const temp = Math.max(didNotRob + n, mightRob);
    didNotRob = mightRob;
    mightRob = temp;
  }

  return Math.max(didNotRob, mightRob);
}
