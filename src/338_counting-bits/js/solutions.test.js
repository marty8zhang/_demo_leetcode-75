// import { countBits } from './solution-1.js';
import { countBits } from './solution-1.1.js';

describe('`countBits()`', () => {
  it('should return `[0]`, when `n` is `0`', () => {
    expect(countBits(0)).toStrictEqual([0]);
  });

  it('should return `[0, 1]`, when `n` is `1`', () => {
    expect(countBits(1)).toStrictEqual([0, 1]);
  });

  it('should return `[0, 1, 1, 2, 1, 2]`, when `n` is `5`', () => {
    expect(countBits(5)).toStrictEqual([0, 1, 1, 2, 1, 2]);
  });
});
