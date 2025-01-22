export function deleteNode(root, key) {
  if (!root) return null;

  if (root.val > key) root.left = deleteNode(root.left, key);
  else if (root.val < key) root.right = deleteNode(root.right, key);
  else {
    if (!root.left && !root.right) return null;
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    root.val = retrieveBSTMaxValue(root.left);
    root.left = deleteNode(root.left, root.val);
  }

  return root;
}

function retrieveBSTMaxValue(node) {
  let current = node;

  while (current.right) current = current.right;

  return current.val;
}
