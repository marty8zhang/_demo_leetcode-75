export function goodNodes(root) {
  if (!root) return 0;

  return (
    1 +
    traverseAndCount(root.left, root.val) +
    traverseAndCount(root.right, root.val)
  );

  function traverseAndCount(node, maxValue) {
    if (!node) return 0;

    let count = 0;

    if (node.val >= maxValue) {
      count++;
      maxValue = node.val;
    }
    count += traverseAndCount(node.left, maxValue);
    count += traverseAndCount(node.right, maxValue);

    return count;
  }
}
