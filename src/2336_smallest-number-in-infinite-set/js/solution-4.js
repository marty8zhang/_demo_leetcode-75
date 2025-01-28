/*
 * Intuition:
 *   - Return the incremental integer number if possible.
 *   - Otherwise, use an `inconsistentInts` set to track the numbers which have
 *     been `addBack()`, and work out the min from the set.
 *
 * Notes:
 *   - This is a "real" infinite set solution.
 *   - This solution cheats the limitation of LeetCode's limited number of test
 *     cases. However, in a real world scenario, the more `addBack()`s after
 *     `popSmallest()`s, the worse the performance of the class will be, because
 *     the `inconsistentInts` set will keep on expanding.
 */
export function SmallestInfiniteSet() {
  this.min = 1;
  this.inconsistentMax = -1;
  this.inconsistentInts = new Set();
}

SmallestInfiniteSet.prototype.popSmallest = function () {
  let min = this.min;

  let inconsistentMin = Number.MAX_SAFE_INTEGER;
  switch (this.inconsistentInts.size) {
    case 0:
      this.min++;
      break;
    case 1:
      this.inconsistentMax = -1;
      this.inconsistentInts.delete(min);
      this.min++;
      break;
    default:
      this.inconsistentInts.delete(min);

      for (const num of this.inconsistentInts)
        if (num < inconsistentMin) inconsistentMin = num;
      this.min = inconsistentMin;
  }

  return min;
};

SmallestInfiniteSet.prototype.addBack = function (num) {
  if (num < this.min) {
    if (this.inconsistentMax === -1) this.inconsistentMax = this.min;
    this.inconsistentInts.add(num);
    this.inconsistentInts.add(this.min);
    this.min = num;
  } else if (num < this.inconsistentMax) {
    /*
     * In order to improve the performance in a real world scenario, a sub-
     * algorithm for reducing the size of `this.inconsistentInts` will be
     * preferable. Below is just an example code as the food for thought,
     * though its actual benefit is arguable. E.g., if `inconsistentMax === 10`,
     * calling `addBack()` with the exact order of `9, 8, 7, 6, ...` can be very
     * beneficial; otherwise, the additional logic will only (slightly) hinder
     * the performance instead.
     */
    // if (this.inconsistentMax - num === 1) {
    //   this.inconsistentInts.delete(this.inconsistentMax);
    //   this.inconsistentMax = num;
    // }
    this.inconsistentInts.add(num);
  }
};
