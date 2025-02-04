export function maxDepth(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
