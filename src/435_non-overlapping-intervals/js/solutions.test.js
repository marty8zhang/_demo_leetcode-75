// import { eraseOverlapIntervals } from './solution-1.js';
// import { eraseOverlapIntervals } from './solution-2.js';
import { eraseOverlapIntervals } from './solution-2.1.js';

describe('`eraseOverlapIntervals()`', () => {
  it('should return `0`, when no interval needs to be removed', () => {
    expect(eraseOverlapIntervals([[1, 2]])).toBe(0);
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 3],
      ]),
    ).toBe(0);
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [3, 4],
      ]),
    ).toBe(0);
  });

  it('should remove all duplicates, when there are duplicate intervals', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [1, 2],
      ]),
    ).toBe(1);
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [1, 2],
        [1, 2],
      ]),
    ).toBe(2);
  });

  it('should return the expected result, when there are multiple intervals need to be removed', () => {
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 9],
        [2, 3],
        [4, 5],
      ]),
    ).toBe(1);
    expect(
      eraseOverlapIntervals([
        [1, 2],
        [2, 4],
        [4, 5],
        [2, 3],
        [3, 4],
        [4, 5],
      ]),
    ).toBe(2);
  });

  it('should return the expected result, when the intervals are not sorted', () => {
    expect(
      eraseOverlapIntervals([
        [1, 100],
        [11, 22],
        [1, 11],
        [2, 12],
      ]),
    ).toBe(2);
    expect(
      eraseOverlapIntervals([
        [-52, 31],
        [-73, -26],
        [82, 97],
        [-65, -11],
        [-62, -49],
        [95, 99],
        [58, 95],
        [-31, 49],
        [66, 98],
        [-63, 2],
        [30, 47],
        [-40, -26],
      ]),
    ).toBe(7);
  });

  it('should return the expected result, when doing performance checks', () => {
    expect(
      /* prettier-ignore */
      eraseOverlapIntervals([[-25322, -4602], [-35630, -28832], [-33802, 29009], [13393, 24550], [-10655, 16361], [-2835, 10053], [-2290, 17156], [1236, 14847], [-45022, -1296], [-34574, -1993], [-14129, 15626], [3010, 14502], [42403, 45946], [-22117, 13380], [7337, 33635], [-38153, 27794], [47640, 49108], [40578, 46264], [-38497, -13790], [-7530, 4977], [-29009, 43543], [-49069, 32526], [21409, 43622], [-28569, 16493], [-28301, 34058]]),
    ).toBe(19);
    expect(
      /* prettier-ignore */
      eraseOverlapIntervals([[81, 97], [-71, 60], [36, 97], [76, 96], [59, 68], [54, 88], [-65, 40], [83, 84], [27, 50], [-59, -50], [73, 78], [50, 57], [-49, 81], [-16, 90], [-83, -23], [-58, 98], [78, 99], [-57, 81], [-2, 85], [-88, 45], [85, 90], [-64, 17], [76, 78], [-17, 5], [-98, 15], [86, 100]]),
    ).toBe(18);
  });
});
