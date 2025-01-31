function asteroidCollision(asteroids) {
  const result = [];

  for (let a of asteroids) {
    if (a > 0) {
      result.push(a);
      continue;
    }

    while (
      result[result.length - 1] > 0 &&
      result[result.length - 1] < Math.abs(a)
    )
      result.pop();

    if (result[result.length - 1] === Math.abs(a)) result.pop();
    else if (!result.length || result[result.length - 1] < 0) result.push(a);
  }

  return result;
}

export default asteroidCollision;
