import { TreeNode } from '../../libraries/tree-node.js';
import { deleteNode } from './solution-1.js';

describe('`deleteNode()`', () => {
  it('should return `null`, when there is no node', () => {
    expect(deleteNode(null, 0)).toBe(null);
    expect(deleteNode(undefined, 1)).toBe(null);
  });

  it('should return `null`, when there is only one node and it needs to be deleted', () => {
    expect(deleteNode(new TreeNode(-100000), -100000)).toBe(null);
  });

  it('should return the left node, when the root node needs to be deleted', () => {
    const leftNode = new TreeNode(-100000);
    const rightNode = new TreeNode(100000);
    const root = new TreeNode(11, leftNode, rightNode);

    const result = deleteNode(root, 11);

    expect(convertToArray(result)).toStrictEqual([-100000, null, 100000]);
  });

  it('should return the right node, when the root node needs to be deleted and there is no left node', () => {
    const rightNode = new TreeNode(100000);
    const root = new TreeNode(11, null, rightNode);

    const result = deleteNode(root, 11);

    expect(convertToArray(result)).toStrictEqual([100000]);
  });

  it('should return the expected result, when it is a 3-level BST, and the left node needs to be deleted', () => {
    const firstLeaf = new TreeNode(-1);
    const secondLeaf = new TreeNode(1);
    const thirdLeaf = new TreeNode(99);
    const fourthLeaf = new TreeNode(101);
    const leftNode = new TreeNode(0, firstLeaf, secondLeaf);
    const rightNode = new TreeNode(100, thirdLeaf, fourthLeaf);
    const root = new TreeNode(11, leftNode, rightNode);

    const result = deleteNode(root, 0);

    expect(result).toBe(root);
    expect(convertToArray(result)).toStrictEqual([
      11,
      -1,
      100,
      null,
      1,
      99,
      101,
    ]);
  });

  it('should return the expected result, when it is a 3-level BST, and the right node needs to be deleted', () => {
    const firstLeaf = new TreeNode(-1);
    const secondLeaf = new TreeNode(1);
    const leftNode = new TreeNode(0, null, firstLeaf);
    const rightNode = new TreeNode(100, secondLeaf);
    const root = new TreeNode(11, leftNode, rightNode);

    const result = deleteNode(root, 100);

    expect(result).toBe(root);
    expect(convertToArray(result)).toStrictEqual([
      11,
      0,
      1,
      null,
      -1,
      null,
      null,
    ]);
  });

  it('should return the expected result, when it is a 3-level BST, and the root needs to be deleted', () => {
    const firstLeaf = new TreeNode(-1);
    const secondLeaf = new TreeNode(1);
    const thirdLeaf = new TreeNode(99);
    const fourthLeaf = new TreeNode(101);
    const leftNode = new TreeNode(0, firstLeaf, secondLeaf);
    const rightNode = new TreeNode(100, thirdLeaf, fourthLeaf);
    const root = new TreeNode(11, leftNode, rightNode);

    const result = deleteNode(root, 11);

    expect(convertToArray(result)).toStrictEqual([
      1,
      0,
      100,
      -1,
      null,
      99,
      101,
    ]);
  });

  it('should return the expected result, when it is a 3-level BST, and a leaf needs to be deleted', () => {
    const firstLeaf = new TreeNode(-1);
    const secondLeaf = new TreeNode(1);
    const thirdLeaf = new TreeNode(99);
    const fourthLeaf = new TreeNode(101);
    const leftNode = new TreeNode(0, firstLeaf, secondLeaf);
    const rightNode = new TreeNode(100, thirdLeaf, fourthLeaf);
    const root = new TreeNode(11, leftNode, rightNode);

    const result = deleteNode(root, 99);

    expect(convertToArray(result)).toStrictEqual([
      11,
      0,
      100,
      -1,
      1,
      null,
      101,
    ]);
  });
});

function convertToArray(bstRoot) {
  if (!bstRoot) return [];

  const result = [];
  const queue = [bstRoot];

  while (queue.filter((node) => node).length) {
    const numberOfNodesOnTheCurrentLevel = queue.length;

    for (let i = 0; i < numberOfNodesOnTheCurrentLevel; i++) {
      const node = queue.shift();
      result.push(node?.val ?? null);

      queue.push(node?.left ?? null);
      queue.push(node?.right ?? null);
    }
  }

  return result;
}
