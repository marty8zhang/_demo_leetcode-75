import {
  FIXTURE_LEETCODE_51_EXPECTED_RESULTS,
  FIXTURE_LEETCODE_51_POTIONS,
  FIXTURE_LEETCODE_51_SPELLS,
  FIXTURE_LEETCODE_51_SUCCESS,
} from './fixtures/leetcode-51.js';
// import { successfulPairs } from './solution-1.js';
import { successfulPairs } from './solution-2.js';

describe('`successfulPairs()`', () => {
  it('should return the expected results, when there is only one spell', () => {
    expect(successfulPairs([1], [3, 7, 6, 23, 1], 6)).toStrictEqual([3]);
  });

  it('should return the expected results, when there are multiple spells', () => {
    expect(successfulPairs([7, 1, 3, 24], [3, 7, 6, 23, 1], 24)).toStrictEqual([
      3, 0, 1, 5,
    ]);
  });

  it('should return the expected results, when doing performance check', () => {
    expect(
      successfulPairs(
        FIXTURE_LEETCODE_51_SPELLS,
        FIXTURE_LEETCODE_51_POTIONS,
        FIXTURE_LEETCODE_51_SUCCESS,
      ),
    ).toStrictEqual(FIXTURE_LEETCODE_51_EXPECTED_RESULTS);
  });
});
