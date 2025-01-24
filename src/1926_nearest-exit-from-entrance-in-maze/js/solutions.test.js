import { HUNDRED_BY_HUNDRED_NO_EXIT_MAZE } from './fixtures/hundred-by-hundred-no-exit-maze.js';
import { nearestExit } from './solution-1.js';

describe('`nearestExit()`', () => {
  it('should return `-1`, when there is only the entrance cell in the maze', () => {
    expect(nearestExit([['.']], [0, 0])).toBe(-1);
  });

  it('should return `-1`, when there is only the entrance cell and a north wall in the maze', () => {
    expect(nearestExit([['+'], ['.']], [1, 0])).toBe(-1);
  });

  it('should return `-1`, when there is only the entrance cell and a south wall in the maze', () => {
    expect(nearestExit([['.'], ['+']], [0, 0])).toBe(-1);
  });

  it('should return `-1`, when there is only the entrance cell and a west wall in the maze', () => {
    expect(nearestExit([['+', '.']], [0, 1])).toBe(-1);
  });

  it('should return `-1`, when there is only the entrance cell and an east wall in the maze', () => {
    expect(nearestExit([['.', '+']], [0, 0])).toBe(-1);
  });

  it('should return `1`, when there is only the entrance cell and an exit in the maze', () => {
    expect(nearestExit([['.'], ['.']], [1, 0])).toBe(1);
  });

  it('should return `-1`, when the entrance cell is surrounded by walls in the maze', () => {
    expect(
      nearestExit(
        [
          ['.', '+', '.'],
          ['+', '.', '+'],
          ['.', '+', '.'],
        ],
        [1, 1],
      ),
    ).toBe(-1);
  });

  it('should return `1`, when there is no wall in the maze', () => {
    expect(
      nearestExit(
        [
          ['.', '.', '.'],
          ['.', '.', '.'],
          ['.', '.', '.'],
        ],
        [1, 1],
      ),
    ).toBe(1);
  });

  it('should return the expected result, when there is an one-directional exit path to the east in the maze', () => {
    expect(
      nearestExit(
        [
          ['+', '+', '+'],
          ['.', '.', '.'],
          ['+', '+', '+'],
        ],
        [1, 0],
      ),
    ).toBe(2);
  });

  it('should return the expected result, when there is an only exit path having a turn in the maze', () => {
    expect(
      nearestExit(
        [
          ['+', '+', '.', '+'],
          ['.', '.', '.', '+'],
          ['+', '+', '+', '.'],
        ],
        [1, 0],
      ),
    ).toBe(3);
  });

  it('should return the expected result, when there are more than one exit paths requiring different numbers of moves in the maze', () => {
    expect(
      nearestExit(
        [
          ['+', '+', '.', '+'],
          ['.', '.', '.', '+'],
          ['+', '.', '+', '.'],
        ],
        [1, 0],
      ),
    ).toBe(2);
  });

  it('should return the expected result, when running the performance test', () => {
    expect(nearestExit(HUNDRED_BY_HUNDRED_NO_EXIT_MAZE, [42, 4])).toBe(-1);
  });
});
