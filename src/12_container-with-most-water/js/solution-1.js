function maxArea(height) {
  const l = height.length;
  let max = 0;

  for (let i = 0; i < l - 1; i++) {
    if (height[i] === 0) continue;

    for (let j = i + 1; j < l; j++) {
      const current = Math.min(height[i], height[j]) * (j - i);

      max = current > max ? current : max;
    }
  }

  return max;
}

export default maxArea;
