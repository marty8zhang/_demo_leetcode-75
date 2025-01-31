/*
 * This version also derives from solution 1. It has the better performance but
 * has the side effect of silently updating `count`.
 */
export function goodNodes(root) {
  let count = 0;

  traverseAndUpdateCount(root, root?.val);

  return count;

  function traverseAndUpdateCount(node, maxValue) {
    if (!node) return;

    if (node.val >= maxValue) {
      count++;
      maxValue = node.val;
    }
    traverseAndUpdateCount(node.left, maxValue);
    traverseAndUpdateCount(node.right, maxValue);
  }
}
