import { TreeNode } from '../../libraries/tree-node.js';
// import { maxLevelSum } from './solution-1.js';
import { maxLevelSum } from './solution-2.js';

describe('`maxLevelSum()`', () => {
  it('should return `1`, when there is only one node on the binary tree', () => {
    expect(maxLevelSum(new TreeNode(-100000))).toBe(1);
  });

  it('should return `1`, when it is a 2-levelled binary tree and the second level sum is lesser than the root value', () => {
    const left = new TreeNode(1);
    const right = new TreeNode(-3);
    const root = new TreeNode(-1, left, right);

    expect(maxLevelSum(root)).toBe(1);
  });

  it('should return `1`, when it is a 2-levelled binary tree and the second level sum is the same as the root value', () => {
    const left = new TreeNode(2);
    const right = new TreeNode(-3);
    const root = new TreeNode(-1, left, right);

    expect(maxLevelSum(root)).toBe(1);
  });

  it('should return `2`, when it is a 2-levelled binary tree and the second level sum is greater than the root value', () => {
    const left = new TreeNode(3);
    const right = new TreeNode(-3);
    const root = new TreeNode(-1, left, right);

    expect(maxLevelSum(root)).toBe(2);
  });

  it('should return `1`, when it is a 3-levelled binary tree and no other sum is greater than the root value', () => {
    const firstLeaf = new TreeNode(-1);
    const secondLeaf = new TreeNode(-2);
    const left = new TreeNode(-4, null, firstLeaf);
    const right = new TreeNode(3, secondLeaf);
    const root = new TreeNode(-1, left, right);

    expect(maxLevelSum(root)).toBe(1);
  });

  it('should return `2`, when it is a 3-levelled binary tree and the second level sum is the greatest', () => {
    const firstLeaf = new TreeNode(1);
    const secondLeaf = new TreeNode(-2);
    const thirdLeaf = new TreeNode(5);
    const fourthLeaf = new TreeNode(-4);
    const left = new TreeNode(4, firstLeaf, secondLeaf);
    const right = new TreeNode(-3, thirdLeaf, fourthLeaf);
    const root = new TreeNode(-1, left, right);

    expect(maxLevelSum(root)).toBe(2);
  });

  it('should return `3`, when it is a 3-levelled binary tree and the third level sum is the greatest', () => {
    const firstLeaf = new TreeNode(-1);
    const secondLeaf = new TreeNode(3);
    const left = new TreeNode(4);
    const right = new TreeNode(-3, firstLeaf, secondLeaf);
    const root = new TreeNode(-1, left, right);

    expect(maxLevelSum(root)).toBe(3);
  });
});
