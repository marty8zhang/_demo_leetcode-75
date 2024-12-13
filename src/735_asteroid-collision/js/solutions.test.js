import asteroidCollision from './solution-1.js';

describe('`asteroidCollision()`', () => {
  it('should return the positive bigger size asteroid, when there are only two asteroids in the given array', () => {
    expect(asteroidCollision([100, -99])).toEqual([100]);
  });

  it('should return the negative bigger size asteroid, when there are only two asteroids in the given array', () => {
    expect(asteroidCollision([100, -999])).toEqual([-999]);
  });

  it('should return an empty array, when there are only two asteroids with the same size but different directions in the given array', () => {
    expect(asteroidCollision([1000, -1000])).toEqual([]);
  });

  it('should return the same array, when there are only two asteroids with negative values in the given array', () => {
    expect(asteroidCollision([-1000, -10])).toEqual([-1000, -10]);
  });

  it('should return the same array, when there are only two asteroids with positive values in the given array', () => {
    expect(asteroidCollision([10, 1000])).toEqual([10, 1000]);
  });

  it('should return the same array, when there are multiple asteroids and they never collide', () => {
    expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
  });

  it('should return an empty array, when there are multiple asteroids in the given array, but all exploded at the end', () => {
    expect(asteroidCollision([123, 98, 100, -123])).toEqual([]);
  });

  it('should return the expected result, when there are multiple asteroids in the given array, and the last asteroid explodes', () => {
    expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
  });

  it('should return the expected result, when there are multiple asteroids in the given array, and only the last asteroid does not explode', () => {
    expect(asteroidCollision([2, -1, -2, -2])).toEqual([-2]);
  });

  it('should return the expected result, when there are multiple asteroids in the given array, and the asteroids on the left end of the array do not explode', () => {
    expect(asteroidCollision([-2, -2, 1, -1])).toEqual([-2, -2]);
  });

  it('should return the expected result, when there are multiple asteroids in the given array, and the asteroids on the right end of the array do not explode', () => {
    expect(asteroidCollision([123, -98, 100, -1, -100, -1000, -7])).toEqual([
      -1000, -7,
    ]);
  });
});
