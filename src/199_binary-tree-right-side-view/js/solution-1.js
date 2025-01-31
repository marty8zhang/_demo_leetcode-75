export function rightSideView(root) {
  let result = [];

  traverseAndNote(root, 0);

  return result;

  function traverseAndNote(node, depth) {
    if (!node) return;

    if (result[depth] === undefined) result.push(node.val);

    depth++;
    traverseAndNote(node.right, depth);
    traverseAndNote(node.left, depth);
  }
}
