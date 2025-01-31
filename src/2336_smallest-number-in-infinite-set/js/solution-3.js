export function SmallestInfiniteSet() {
  this.nums = new Array(1001).fill(true);
}

SmallestInfiniteSet.prototype.popSmallest = function () {
  for (let i = 1; i < this.nums.length; i++)
    if (this.nums[i]) {
      this.nums[i] = false;
      return i;
    }

  return null;
};

SmallestInfiniteSet.prototype.addBack = function (num) {
  this.nums[num] = true;
};
