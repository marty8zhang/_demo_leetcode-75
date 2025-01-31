function asteroidCollision(asteroids) {
  const result = [];
  let left = asteroids[0];
  let right;

  for (let i = 1; i < asteroids.length; i++) {
    right = asteroids[i];
    if (
      (left > 0 && right > 0) ||
      (left < 0 && right < 0) ||
      (left < 0 && right > 0)
    ) {
      result.push(left);

      if (i === asteroids.length - 1) result.push(right);
      else left = right;
    } else if (Math.abs(left) > Math.abs(right)) {
      if (i === asteroids.length - 1) result.push(left);
    } else if (Math.abs(left) < Math.abs(right)) {
      if (result.length) {
        left = result.pop();
        i--;
      } else if (i === asteroids.length - 1) result.push(right);
      else left = right;
    } else if (Math.abs(left) === Math.abs(right) && i < asteroids.length - 1) {
      if (result.length) left = result.pop();
      else if (i === asteroids.length - 2) {
        result.push(asteroids[asteroids.length - 1]);
        break;
      } else {
        left = asteroids[i + 1];
        i++;
        if (i === asteroids.length - 1) result.push(left);
      }
    }
  }

  return result;
}

export default asteroidCollision;
