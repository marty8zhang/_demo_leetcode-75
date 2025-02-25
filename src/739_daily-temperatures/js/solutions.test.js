// import { dailyTemperatures } from './solution-1.js';
import { dailyTemperatures } from './solution-1.1.js';

describe('`dailyTemperatures()`', () => {
  it('should return `[0]`, when there is only one temperature given', () => {
    expect(dailyTemperatures([100])).toStrictEqual([0]);
  });

  it('should return all `0`s, when all temperatures are in the descending order', () => {
    expect(dailyTemperatures([100, 50, 30])).toStrictEqual([0, 0, 0]);
  });

  it('should return the expected result, when there are consecutive days with the same temperature', () => {
    expect(dailyTemperatures([30, 40, 40, 50])).toStrictEqual([1, 2, 1, 0]);
  });

  it('should return the expected result, when there are several temperatures', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ]);
    expect(
      dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]),
    ).toStrictEqual([8, 1, 5, 4, 3, 2, 1, 1, 0, 0]);
  });
});
