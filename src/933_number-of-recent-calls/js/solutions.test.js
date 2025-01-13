// import { RecentCounter } from './solution-1.js';
import { RecentCounter } from './solution-2.js';

describe('`RecentCounter.ping()`', () => {
  it('should work as expected', () => {
    const counter = new RecentCounter();

    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(100)).toBe(2);
    expect(counter.ping(3001)).toBe(3);
    expect(counter.ping(3002)).toBe(3);
  });
});
