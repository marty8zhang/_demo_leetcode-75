export function SmallestInfiniteSet() {
  this.nums = new Set([...new Array(1001).keys()]);
  this.nums.delete(0);
}

SmallestInfiniteSet.prototype.popSmallest = function () {
  let min = Number.MAX_SAFE_INTEGER;
  for (const num of this.nums.values()) if (num < min) min = num;

  if (min === Number.MAX_SAFE_INTEGER) return null;
  else {
    this.nums.delete(min);
    return min;
  }
};

SmallestInfiniteSet.prototype.addBack = function (num) {
  this.nums.add(num);
};
