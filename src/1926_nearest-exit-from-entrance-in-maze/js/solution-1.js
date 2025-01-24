export function nearestExit(maze, entrance) {
  const walkedCells = new Set([encodeCell(entrance)]);
  const queue = [entrance];
  let count = 0;

  while (queue.length) {
    count++;

    const numberOfMoves = queue.length;
    for (let i = 0; i < numberOfMoves; i++) {
      const cell = queue.shift();

      const north = cell[0] - 1 >= 0 ? [cell[0] - 1, cell[1]] : null;
      if (
        north &&
        maze[north[0]][north[1]] === '.' &&
        !walkedCells.has(encodeCell(north))
      )
        if (isEdge(north)) return count;
        else {
          queue.push(north);
          walkedCells.add(encodeCell(north));
        }

      const east = cell[1] + 1 < maze[0].length ? [cell[0], cell[1] + 1] : null;
      if (
        east &&
        maze[east[0]][east[1]] === '.' &&
        !walkedCells.has(encodeCell(east))
      )
        if (isEdge(east)) return count;
        else {
          queue.push(east);
          walkedCells.add(encodeCell(east));
        }

      const south = cell[0] + 1 < maze.length ? [cell[0] + 1, cell[1]] : null;
      if (
        south &&
        maze[south[0]][south[1]] === '.' &&
        !walkedCells.has(encodeCell(south))
      )
        if (isEdge(south)) return count;
        else {
          queue.push(south);
          walkedCells.add(encodeCell(south));
        }

      const west = cell[1] - 1 >= 0 ? [cell[0], cell[1] - 1] : null;
      if (
        west &&
        maze[west[0]][west[1]] === '.' &&
        !walkedCells.has(encodeCell(west))
      )
        if (isEdge(west)) return count;
        else {
          queue.push(west);
          walkedCells.add(encodeCell(south));
        }
    }
  }

  return -1;

  function encodeCell(cell) {
    return `${cell[0]},${cell[1]}`;
  }

  function isEdge(cell) {
    return (
      cell[0] === 0 ||
      cell[0] === maze.length - 1 ||
      cell[1] === 0 ||
      cell[1] === maze[0].length - 1
    );
  }
}
