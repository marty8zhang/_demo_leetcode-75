import { maxDepth } from './solution-1.js';
import { TreeNode } from '../../libraries/tree-node.js';

describe('`maxDepth()`', () => {
  it('should return `0`, when there is no node', () => {
    expect(maxDepth(null)).toBe(0);
  });

  it('should return `1`, when there is only one node on the binary tree', () => {
    expect(maxDepth(new TreeNode(0))).toBe(1);
  });

  it('should return `2`, when the root node only has a left node on the binary tree', () => {
    const left = new TreeNode(1);
    const root = new TreeNode(0, left);

    expect(maxDepth(root)).toBe(2);
  });

  it('should return `2`, when the root node only has a right node on the binary tree', () => {
    const right = new TreeNode(2);
    const root = new TreeNode(0, null, right);

    expect(maxDepth(root)).toBe(2);
  });

  it('should return `3`, when the farthest leaf node is on level three and it is the leftmost', () => {
    const leaf = new TreeNode(3);
    const left = new TreeNode(1, leaf);
    const root = new TreeNode(0, left);

    expect(maxDepth(root)).toBe(3);
  });

  it('should return `3`, when the farthest leaf node is on level three and it is the rightmost', () => {
    const leaf = new TreeNode(6);
    const right = new TreeNode(2, null, leaf);
    const root = new TreeNode(0, null, right);

    expect(maxDepth(root)).toBe(3);
  });
});
