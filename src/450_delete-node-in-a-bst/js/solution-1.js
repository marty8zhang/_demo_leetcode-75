/*
 * Note: This solution is a bad example which fails the LeetCode performance
 * check.
 */
export function deleteNode(root, key) {
  if (!root) return null;

  const queue = [{ node: root, parent: null, isLeft: false }];
  let result = root;

  while (queue.length) {
    const numberOfNodesOnTheCurrentLevel = queue.length;
    for (let i = 0; i < numberOfNodesOnTheCurrentLevel; i++) {
      const { node, parent, isLeft } = queue.shift();
      // Nothing to delete.
      if (node.val !== key) {
        if (node.left)
          queue.push({
            node: node.left,
            parent: node,
            isLeft: true,
          });
        if (node.right)
          queue.push({
            node: node.right,
            parent: node,
            isLeft: false,
          });

        continue;
      }

      // Delete node.
      // Is a leaf.
      if (!node.left && !node.right) {
        // Is the root.
        if (!parent) return null;

        if (isLeft) parent.left = null;
        else parent.right = null;

        return result;
      }

      // Delete a non-leaf node.
      let replacingNode;
      if (node.left) {
        replacingNode = retrieveBSTMaxValueNodeDetails(node.left, node, true);
      } else {
        replacingNode = retrieveBSTMinValueNodeDetails(node.right, node, false);
      }

      // Take the replacing node out of the tree.
      if (replacingNode.parent !== node) {
        if (replacingNode.isLeft)
          replacingNode.parent.left = replacingNode.node.right;
        else replacingNode.parent.right = replacingNode.node.left;
      }

      // Re-attach the replacing node back to the tree.
      if (parent) {
        if (isLeft) parent.left = replacingNode.node;
        else parent.right = replacingNode.node;

        if (replacingNode.isLeft) {
          if (replacingNode.parent !== node)
            replacingNode.node.left = node.left;
          replacingNode.node.right = node.right;
        } else {
          replacingNode.node.left = node.left;
          if (replacingNode.parent !== node)
            replacingNode.node.right = node.right;
        }
      } else {
        result = replacingNode.node;

        if (replacingNode.isLeft) {
          if (replacingNode.parent !== root)
            replacingNode.node.left = root.left;
          replacingNode.node.right = root.right;
        } else {
          replacingNode.node.left = root.left;
          if (replacingNode.parent !== root)
            replacingNode.node.right = root.right;
        }
      }

      return result;
    }
  }

  return result;
}

function retrieveBSTMaxValueNodeDetails(node, parent, isLeft) {
  let current = node;

  while (current.right) {
    parent = current;
    current = node.right;
    isLeft = false;
  }

  return {
    node: current,
    parent,
    isLeft,
  };
}

function retrieveBSTMinValueNodeDetails(node, parent, isLeft) {
  let current = node;

  while (current.left) {
    parent = current;
    current = node.left;
    isLeft = true;
  }

  return {
    node: current,
    parent,
    isLeft,
  };
}
