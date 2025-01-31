function equalPairs(grid) {
  const l = grid.length;
  const columns = new Map();

  for (let i = 0; i < l; i++) {
    let col = '';

    for (let j = 0; j < l; j++) {
      col = `${col},${grid[j][i]}`;
    }

    col = col.substring(1);
    columns.set(col, (columns.get(col) ?? 0) + 1);
  }

  let count = 0;

  for (let i = 0; i < l; i++) {
    count += columns.get(grid[i].join(',')) ?? 0;
  }

  return count;
}

export default equalPairs;
