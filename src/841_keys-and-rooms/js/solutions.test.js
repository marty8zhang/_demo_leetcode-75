import { canVisitAllRooms } from './solution-1.js';

describe('`canVisitAllRooms()`', () => {
  it('should return `false`, when room `0` has no key', () => {
    expect(canVisitAllRooms([[], [0, 1]])).toBe(false);
  });

  it('should return `false`, when room `0` only has a key to itself', () => {
    expect(canVisitAllRooms([[0], [2], [1]])).toBe(false);
  });

  it('should return `false`, when the keys are not enough to open all rooms', () => {
    expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBe(false);
  });

  it('should return `false`, when the keys are enough to open all rooms', () => {
    expect(canVisitAllRooms([[1], [2], [3], []])).toBe(true);
  });
});
