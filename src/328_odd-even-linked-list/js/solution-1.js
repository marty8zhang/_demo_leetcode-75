export function oddEvenList(head) {
  const evenHead = head?.next;
  if (evenHead?.next === undefined) return head;

  let oddPointer = head;
  let evenPointer = evenHead;
  while (evenPointer?.next) {
    oddPointer.next = evenPointer.next;
    oddPointer = oddPointer.next;
    /*
     * Removing `?? null` at the end can further improve performance, but
     * `evenPointer.next` might end up with `undefined` rather than `null`.
     */
    evenPointer.next = evenPointer.next?.next ?? null;
    evenPointer = evenPointer.next;
  }

  /* Attach the even-indexed nodes to the end of odd-indexed nodes. */
  oddPointer.next = evenHead;

  return head;
}
