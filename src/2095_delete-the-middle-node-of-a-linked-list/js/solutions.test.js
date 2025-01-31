import { ListNode } from '../../libraries/list-node.js';
// import { deleteMiddle } from './solution-1.js';
import { deleteMiddle } from './solution-2.js';

describe('`deleteMiddle()`', () => {
  it('should return `null`, when there is only one node in the linked list', () => {
    const node = new ListNode(1, null);

    const result = deleteMiddle(node);

    expect(result).toBeNull();
  });

  it('should delete the `1`-indexed node, when there are two nodes in the linked list', () => {
    const secondNode = new ListNode(2, null);
    const firstNode = new ListNode(1, secondNode);

    const result = deleteMiddle(firstNode);

    expect(result).toBe(firstNode);
    expect(firstNode.next).toBeNull();
  });

  it('should delete the `1`-indexed node, when there are three nodes in the linked list', () => {
    const thirdNode = new ListNode(3, null);
    const secondNode = new ListNode(2, thirdNode);
    const firstNode = new ListNode(1, secondNode);

    const result = deleteMiddle(firstNode);

    expect(result).toBe(firstNode);
    expect(firstNode.next).toBe(thirdNode);
  });

  it('should delete the `2`-indexed node, when there are four nodes in the linked list', () => {
    const fourthNode = new ListNode(4, null);
    const thirdNode = new ListNode(3, fourthNode);
    const secondNode = new ListNode(2, thirdNode);
    const firstNode = new ListNode(1, secondNode);

    const result = deleteMiddle(firstNode);

    expect(result).toBe(firstNode);
    expect(secondNode.next).toBe(fourthNode);
  });

  it('should delete the `2`-indexed node, when there are five nodes in the linked list', () => {
    const fifthNode = new ListNode(5, null);
    const fourthNode = new ListNode(4, fifthNode);
    const thirdNode = new ListNode(3, fourthNode);
    const secondNode = new ListNode(2, thirdNode);
    const firstNode = new ListNode(1, secondNode);

    const result = deleteMiddle(firstNode);

    expect(result).toBe(firstNode);
    expect(secondNode.next).toBe(fourthNode);
  });
});
