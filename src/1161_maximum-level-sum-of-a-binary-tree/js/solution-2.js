/*
 * Note: This is a BFS (Breadth First Search) solution by utilising a FIFO
 * queue. However, because the problem itself isn't optimised for BFS, the
 * performance of this solution is actually way worse than solution one.
 */
export function maxLevelSum(root) {
  const queue = [];
  let maxSum = root.val;
  let maxSumLevel = 1;
  let currentLevel = 1;

  queue.push(root);

  while (queue.length) {
    const numberOfNodesOnCurrentLevel = queue.length;
    let sum = 0;
    for (let i = 0; i < numberOfNodesOnCurrentLevel; i++) {
      const node = queue.shift();
      sum += node.val;

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (sum > maxSum) {
      maxSum = sum;
      maxSumLevel = currentLevel;
    }

    currentLevel++;
  }

  return maxSumLevel;
}
