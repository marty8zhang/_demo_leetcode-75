export const RecentCounter = function () {
  this.calls = [];
};

RecentCounter.prototype.ping = function (t) {
  this.calls.push(t);

  /*
   * This solution is much faster than solution 1 and is more aligned to the
   * "queue" category of the LeetCode problem. However, it's also questionable
   * that if deleting "history" in the lifecycle of a class is really desirable
   * or not according to real world "habits". Some might think the deletion is
   * smart, others might argue that it's dangerous or uncertain at the best.
   */
  while (this.calls[0] < t - 3000) this.calls.shift();

  return this.calls.length;
};
