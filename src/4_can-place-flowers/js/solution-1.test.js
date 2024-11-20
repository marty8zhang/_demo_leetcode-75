import canPlaceFlowers from './solution-1.js';

describe('canPlaceFlowers()', () => {
  it.each([
    [[0], 2],
    [[0, 0, 1], 2],
    [[1, 0, 0, 0, 1], 2],
    [[1, 0, 0, 0, 0, 0, 1], 3],
  ])(
    'should return `false`, when `n` exceeds the maximum number of new plots of flowers that can be planted',
    (flowerbed, n) => {
      expect(canPlaceFlowers(flowerbed, n)).toBe(false);
    },
  );

  it('should return `false`, when `n` equals to the length of `flowerbed`', () => {
    expect(canPlaceFlowers([0, 0, 0], 3)).toBe(false);
  });

  it('should return `true`, when `n` is `0`', () => {
    expect(canPlaceFlowers([1, 0, 1], 0)).toBe(true);
  });

  it.each([
    [[0], 1],
    [[0, 0, 1], 1],
    [[1, 0, 0, 0, 1], 1],
    [[1, 0, 0, 0, 0, 0, 1], 2],
  ])(
    'should return `true`, when `n` does not exceed the maximum number of new plots of flowers that can be planted',
    (flowerbed, n) => {
      expect(canPlaceFlowers(flowerbed, n)).toBe(true);
    },
  );
});
