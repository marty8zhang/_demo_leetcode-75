export function deleteNode(root, key) {
  if (!root) return null;

  const queue = [{ node: root }];
  let numberOfNodes = queue.length;
  while (numberOfNodes) {
    for (let i = 0; i < numberOfNodes; i++) {
      const nodeInfo = queue.shift();
      const {
        node: { val, left, right },
        node,
        parent,
        isLeft,
      } = nodeInfo;

      if (val !== key) {
        if (left) queue.push({ node: left, parent: node, isLeft: true });
        if (right) queue.push({ node: right, parent: node, isLeft: false });

        continue;
      }

      if (left) {
        if (!left.left && !left.right) {
          node.val = left.val;
          node.left = null;
        } else {
          const replacingNodeInfo = retrieveBSTMaxValueNodeDetails(left);
          node.val = replacingNodeInfo.node.val;
          if (replacingNodeInfo.parent)
            replacingNodeInfo.parent.right = replacingNodeInfo.node.left;
          else node.left = replacingNodeInfo.node.left;
        }
      } else if (right) {
        if (!right.left && !right.right) {
          node.val = right.val;
          node.right = null;
        } else {
          const replacingNodeInfo = retrieveBSTMinValueNodeDetails(right);
          node.val = replacingNodeInfo.node.val;
          if (replacingNodeInfo.parent)
            replacingNodeInfo.parent.left = replacingNodeInfo.node.right;
          else node.right = replacingNodeInfo.node.right;
        }
      } else {
        if (!parent) return null;

        if (isLeft) parent.left = null;
        else parent.right = null;
      }

      return root;
    }

    numberOfNodes = queue.length;
  }

  return root;
}

function retrieveBSTMaxValueNodeDetails(node) {
  let current = node;
  let parent;

  while (current.right) {
    parent = current;
    current = current.right;
  }

  return {
    node: current,
    parent,
  };
}

function retrieveBSTMinValueNodeDetails(node) {
  let current = node;
  let parent;

  while (current.left) {
    parent = current;
    current = current.left;
  }

  return {
    node: current,
    parent,
  };
}
