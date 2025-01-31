/*
 * Note: This version derives from solution 1, has better readability but worse
 * performance.
 */
export function goodNodes(root) {
  if (!root) return 0;

  const { left, right, val } = root;

  return 1 + traverseAndCount(left, val) + traverseAndCount(right, val);

  function traverseAndCount(node, maxValue) {
    if (!node) return 0;

    const { left, right, val } = node;
    let count = 0;

    if (val >= maxValue) {
      count++;
      maxValue = val;
    }
    count += traverseAndCount(left, maxValue);
    count += traverseAndCount(right, maxValue);

    return count;
  }
}
