function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const current = Math.min(height[left], height[right]) * (right - left);

    max = current > max ? current : max;

    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
}

export default maxArea;
