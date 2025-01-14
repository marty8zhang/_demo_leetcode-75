export function deleteMiddle(head) {
  if (head.next === null) return null;

  let current = head;
  let count = 1;
  while (current.next) {
    current = current.next;
    count++;
  }

  const indexToDelete = Math.floor(count / 2);
  current = head;
  count = indexToDelete - 1;
  while (true) {
    if (count === 0) {
      current.next = current.next.next;
      return head;
    }

    current = current.next;
    count--;
  }
}
