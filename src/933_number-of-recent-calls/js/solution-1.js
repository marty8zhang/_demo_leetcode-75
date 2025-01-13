export const RecentCounter = function () {
  this.calls = [];
};

RecentCounter.prototype.ping = function (t) {
  this.calls.push(t);

  let i = 0;
  while (this.calls[i] < t - 3000) i++;

  return this.calls.length - i;
};
