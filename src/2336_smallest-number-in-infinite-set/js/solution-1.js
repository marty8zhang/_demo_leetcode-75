export function SmallestInfiniteSet() {
  this.nums = [...new Array(1001).keys()];
  this.nums.shift();
}

SmallestInfiniteSet.prototype.popSmallest = function () {
  return this.nums.shift();
};

SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.nums.includes(num)) return;

  let i = Math.floor(this.nums.length / 2);
  let minIndex = 0;
  let maxIndex = this.nums.length - 1;
  while (minIndex < maxIndex) {
    if (this.nums[i] < num) {
      if (this.nums[i + 1] > num) {
        this.nums.splice(i + 1, 0, num);
        return;
      }
      minIndex = i + 1;
    } else {
      if (this.nums[i - 1] < num) {
        this.nums.splice(i, 0, num);
        return;
      }
      maxIndex = i - 1;
    }

    i = Math.floor((minIndex + maxIndex) / 2);
  }

  if (maxIndex === 0) {
    if (this.nums[0] > num) this.nums.unshift(num);
    else this.nums.splice(1, 0, num);
  } else if (minIndex === this.nums.length - 1) {
    if (this.nums[this.nums.length - 1] < num) this.nums.push(num);
    else this.nums.splice(this.nums.length - 1, 0, num);
  } else {
    if (this.nums[maxIndex] > num) this.nums.splice(maxIndex, 0, num);
    else this.nums.splice(maxIndex + 1, 0, num);
  }
};
