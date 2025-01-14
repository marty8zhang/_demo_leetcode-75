import { ListNode } from './list-node.js';

/*
 * This solution uses a two-pointer technique to achieve a single traversal of
 * any given linked list.
 *   - The slow pointer traverses one node at a time, whereas the faster pointer
 *     traverses two.
 *   - When the faster pointer reaches the end of the list, the slower pointer
 *     should land on/before the node that needs to be deleted.
 *   - The slower pointer is purposely made starting from one node ahead of
 *     `head`, so that we don't need a doubly linked list structure, e.g.,
 *     `nodeToDelete.prev.next = nodeToDelete.next`.
 */
export function deleteMiddle(head) {
  if (head.next === null) return null;

  let slowPointer = new ListNode(-1, head);
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  slowPointer.next = slowPointer.next.next;

  return head;
}
