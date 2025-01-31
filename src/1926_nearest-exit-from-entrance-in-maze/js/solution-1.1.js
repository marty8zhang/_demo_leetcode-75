export function nearestExit(maze, entrance) {
  const queue = [entrance];
  let count = 0;

  /* Use `'-'` to mark walked cells. */
  maze[entrance[0]][entrance[1]] = '-';
  while (queue.length) {
    const numberOfMoves = queue.length;
    for (let i = 0; i < numberOfMoves; i++) {
      const cell = queue.shift();
      const [row, col] = cell;

      if (
        /* `count === 0` indicates entrance. */
        count &&
        /* Reached the exit. */
        (row === 0 ||
          row === maze.length - 1 ||
          col === 0 ||
          col === maze[0].length - 1)
      )
        return count;

      if (row - 1 >= 0 && maze[row - 1][col] === '.') {
        queue.push([row - 1, col]);
        /*
         * Prevents overlapping from the following `push`es in the same `for`
         * loop iteration (same level), to greatly improve performance. E.g. the
         * east cell of `cell(1, 2)` and the north cell of `cell(2, 3)` is the
         * same `cell(1, 3)`. By this means, `cell(1, 3)` will only be `push`ed
         * once.
         */
        maze[row - 1][col] = '-';
      }

      if (col + 1 < maze[0].length && maze[row][col + 1] === '.') {
        queue.push([row, col + 1]);
        maze[row][col + 1] = '-';
      }

      if (row + 1 < maze.length && maze[row + 1][col] === '.') {
        queue.push([row + 1, col]);
        maze[row + 1][col] = '-';
      }

      if (col - 1 >= 0 && maze[row][col - 1] === '.') {
        queue.push([row, col - 1]);
        maze[row][col - 1] = '-';
      }
    }

    count++;
  }

  return -1;
}
