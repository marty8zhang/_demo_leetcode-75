// import asteroidCollision from './solution-1.js';
import asteroidCollision from './solution-2.js';

describe('`asteroidCollision()`', () => {
  it('should return the same array, when there are only two asteroids and they move away from each other', () => {
    expect(asteroidCollision([-1, 2])).toEqual([-1, 2]);
  });

  it('should return the same array, when there are only two asteroids and they both move to the left', () => {
    expect(asteroidCollision([-1, -2])).toEqual([-1, -2]);
  });

  it('should return the same array, when there are only two asteroids and they both move to the right', () => {
    expect(asteroidCollision([1, 2])).toEqual([1, 2]);
  });

  it('should return the negative bigger size asteroid, when there are only two asteroids', () => {
    expect(asteroidCollision([100, -999])).toEqual([-999]);
  });

  it('should return the positive bigger size asteroid, when there are only two asteroids', () => {
    expect(asteroidCollision([100, -99])).toEqual([100]);
  });

  it('should return an empty array, when there are only two asteroids with the same size and they move towards each other', () => {
    expect(asteroidCollision([1000, -1000])).toEqual([]);
  });

  it('should return the same array, when there are multiple asteroids and they never collide', () => {
    expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
  });

  it('should return the expected result, when there are a series of collisions, and the last asteroid goes left', () => {
    expect(asteroidCollision([-1, 2, -3])).toEqual([-1, -3]);
  });

  it('should return the expected result, when most asteroids go right, but only the last biggest one goes left', () => {
    expect(asteroidCollision([122, 98, 100, -123])).toEqual([-123]);
  });

  it('should return the expected result, when there are a series of collisions, and the last asteroid explodes', () => {
    expect(asteroidCollision([5, 10, 3, -5])).toEqual([5, 10]);
  });

  it('should return the expected result, when there are multiple a series of collisions, and the last asteroid explodes together with another one', () => {
    expect(asteroidCollision([1, 4, 2, -4])).toEqual([1]);
  });
});
