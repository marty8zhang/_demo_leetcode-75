import { ListNode } from '../../libraries/list-node.js';
import { oddEvenList } from './solution-1.js';

describe('`oddEvenList()`', () => {
  it('should return the same linked list, when there is only one node on the list', () => {
    const firstNode = new ListNode(1);

    const result = oddEvenList(firstNode);

    expect(result).toBe(firstNode);
    expect(convertToArray(result)).toStrictEqual([1]);
  });

  it('should return the same linked list, when there are only two nodes on the list', () => {
    const secondNode = new ListNode(2);
    const firstNode = new ListNode(1, secondNode);

    const result = oddEvenList(firstNode);

    expect(result).toBe(firstNode);
    expect(convertToArray(result)).toStrictEqual([1, 2]);
  });

  it('should return the expected result, when there are three nodes on the list', () => {
    const thirdNode = new ListNode(3);
    const secondNode = new ListNode(2, thirdNode);
    const firstNode = new ListNode(1, secondNode);

    const result = oddEvenList(firstNode);

    expect(result).toBe(firstNode);
    expect(convertToArray(result)).toStrictEqual([1, 3, 2]);
  });

  it('should return the expected result, when there are four nodes on the list', () => {
    const fourthNode = new ListNode(4);
    const thirdNode = new ListNode(3, fourthNode);
    const secondNode = new ListNode(2, thirdNode);
    const firstNode = new ListNode(1, secondNode);

    const result = oddEvenList(firstNode);

    expect(result).toBe(firstNode);
    expect(convertToArray(result)).toStrictEqual([1, 3, 2, 4]);
  });

  it('should return the expected result, when there are five nodes on the list', () => {
    const fifthNode = new ListNode(5);
    const fourthNode = new ListNode(4, fifthNode);
    const thirdNode = new ListNode(3, fourthNode);
    const secondNode = new ListNode(2, thirdNode);
    const firstNode = new ListNode(1, secondNode);

    const result = oddEvenList(firstNode);

    expect(result).toBe(firstNode);
    expect(convertToArray(result)).toStrictEqual([1, 3, 5, 2, 4]);
  });
});

function convertToArray(list) {
  const result = [];

  let current = list;
  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}
