export function oddEvenList(head) {
  const evenHead = head?.next;
  if (evenHead === undefined || evenHead?.next === undefined) return head;

  let oddPointer = head;
  let evenPointer = evenHead;
  while (oddPointer?.next?.next) {
    oddPointer.next = oddPointer.next.next;
    oddPointer = oddPointer.next;

    if (evenPointer?.next?.next) {
      evenPointer.next = evenPointer.next.next;
      evenPointer = evenPointer.next;
    } else {
      // It's the last even-indexed node.
      evenPointer.next = null;
    }
  }

  // Attach the even-indexed nodes to the end of odd-indexed nodes.
  oddPointer.next = evenHead;

  return head;
}
