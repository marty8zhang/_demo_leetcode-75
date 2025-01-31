/*
 * Note: This isn't a BFS (Breadth First Search) solution but a DFS (Depth First
 * Search) one.
 */
export function maxLevelSum(root) {
  const sums = [];

  traverseAndSum(root, 0);

  return sums.indexOf(Math.max(...sums)) + 1;

  function traverseAndSum(node, depth) {
    if (!node) return;

    sums[depth] = (sums[depth] ?? 0) + node.val;

    depth++;
    traverseAndSum(node.left, depth);
    traverseAndSum(node.right, depth);
  }
}
