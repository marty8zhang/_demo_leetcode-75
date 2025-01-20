import { TreeNode } from '../../libraries/tree-node.js';
import { rightSideView } from './solution-1.js';

describe('`rightSideView()`', () => {
  it('should return an empty array, when there is no node', () => {
    expect(rightSideView(null)).toEqual([]);
    expect(rightSideView(undefined)).toEqual([]);
  });

  it('should return an array with the value of root, when there is only one node', () => {
    expect(rightSideView(new TreeNode(0))).toEqual([0]);
  });

  it('should return the expected result, when it is a 2-layered binary tree with full leafs', () => {
    const left = new TreeNode(1);
    const right = new TreeNode(0);
    const root = new TreeNode(0, left, right);

    expect(rightSideView(root)).toEqual([0, 0]);
  });

  it('should return the expected result, when it is a 2-layered binary tree with only a left leaf', () => {
    const left = new TreeNode(1);
    const root = new TreeNode(0, left);

    expect(rightSideView(root)).toEqual([0, 1]);
  });

  it('should return the expected result, when it is a 3-layered binary tree with full leafs', () => {
    const firstLeaf = new TreeNode(3);
    const secondLeaf = new TreeNode(4);
    const thirdLeaf = new TreeNode(5);
    const fourthLeaf = new TreeNode(6);
    const left = new TreeNode(1, firstLeaf, secondLeaf);
    const right = new TreeNode(2, thirdLeaf, fourthLeaf);
    const root = new TreeNode(0, left, right);

    expect(rightSideView(root)).toEqual([0, 2, 6]);
  });

  it('should return the expected result, when it is a 3-layered binary tree with partial leafs', () => {
    const firstLeaf = new TreeNode(3);
    const secondLeaf = new TreeNode(4);
    const left = new TreeNode(1, firstLeaf, secondLeaf);
    const right = new TreeNode(2);
    const root = new TreeNode(0, left, right);

    expect(rightSideView(root)).toEqual([0, 2, 4]);
  });
});
