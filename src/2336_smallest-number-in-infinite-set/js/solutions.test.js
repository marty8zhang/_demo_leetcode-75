import { LEETCODE_114 } from './fixtures/leetcode-114.js';
// import { SmallestInfiniteSet } from './solution-1.js';
// import { SmallestInfiniteSet } from './solution-2.js';
// import { SmallestInfiniteSet } from './solution-3.js';
import { SmallestInfiniteSet } from './solution-4.js';

describe('`SmallestInfiniteSet()`', () => {
  it('should work as expected', () => {
    const smallestInfiniteSet = new SmallestInfiniteSet();

    smallestInfiniteSet.addBack(2);
    expect(smallestInfiniteSet.popSmallest()).toBe(1);
    expect(smallestInfiniteSet.popSmallest()).toBe(2);
    expect(smallestInfiniteSet.popSmallest()).toBe(3);

    smallestInfiniteSet.addBack(1);
    expect(smallestInfiniteSet.popSmallest()).toBe(1);
    expect(smallestInfiniteSet.popSmallest()).toBe(4);
    expect(smallestInfiniteSet.popSmallest()).toBe(5);
  });

  it('should work as expected, when popping `1000` times', () => {
    const smallestInfiniteSet = new SmallestInfiniteSet();

    for (let i = 1; i <= 1000; i++) {
      expect(smallestInfiniteSet.popSmallest()).toBe(i);
    }
  });

  it('should work as expected, when popping many times, then adding a few more times', () => {
    const smallestInfiniteSet = new SmallestInfiniteSet();

    for (let i = 1; i <= 993; i++) {
      expect(smallestInfiniteSet.popSmallest()).toBe(i);
    }

    smallestInfiniteSet.addBack(1);
    smallestInfiniteSet.addBack(2);
    smallestInfiniteSet.addBack(3);
    smallestInfiniteSet.addBack(4);
    smallestInfiniteSet.addBack(5);
    smallestInfiniteSet.addBack(6);
    smallestInfiniteSet.addBack(7);
  });

  it('should work as expected, when popping and adding randomly', () => {
    const smallestInfiniteSet = new SmallestInfiniteSet();

    for (let i = 1; i < LEETCODE_114[0].length; i++) {
      if (LEETCODE_114[0][i] === 'popSmallest')
        expect(smallestInfiniteSet.popSmallest()).toBe(LEETCODE_114[2][i]);
      else smallestInfiniteSet.addBack(LEETCODE_114[1][i][0]);
    }
  });
});
