// import { goodNodes } from './solution-1.js';
import { goodNodes } from './solution-2.js';
import { TreeNode } from '../../libraries/tree-node.js';

describe('`goodNodes()`', () => {
  it('should return `0`, when there is no node', () => {
    expect(goodNodes(null)).toBe(0);
    expect(goodNodes(undefined)).toBe(0);
  });

  it('should return `1`, when there is only one node on the binary tree', () => {
    expect(goodNodes(new TreeNode(-10001))).toBe(1);
  });

  it('should return the expected result, when a 2-layered binary tree has full leafs', () => {
    const left = new TreeNode(-10000);
    const right = new TreeNode(10000);
    const root = new TreeNode(0, left, right);

    expect(goodNodes(root)).toBe(2);
  });

  it('should return the expected result, when a 2-layered binary tree has partial leafs', () => {
    const right = new TreeNode(-10000);
    const root = new TreeNode(0, null, right);

    expect(goodNodes(root)).toBe(1);
  });

  it('should return the expected result, when a 3-layered binary tree has full leafs', () => {
    const firstLeaf = new TreeNode(-1);
    const secondLeaf = new TreeNode(1);
    const thirdLeaf = new TreeNode(19);
    const fourthLeaf = new TreeNode(20);
    const left = new TreeNode(-10000, firstLeaf, secondLeaf);
    const right = new TreeNode(20, thirdLeaf, fourthLeaf);
    const root = new TreeNode(0, left, right);

    expect(goodNodes(root)).toBe(4);
  });

  it('should return the expected result, when a 3-layered binary tree has partial leafs', () => {
    const firstLeaf = new TreeNode(-11);
    const secondLeaf = new TreeNode(-1);
    const right = new TreeNode(-10, firstLeaf, secondLeaf);
    const root = new TreeNode(0, null, right);

    expect(goodNodes(root)).toBe(1);
  });
});
