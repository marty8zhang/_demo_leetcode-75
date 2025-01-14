public class SolutionTwo
{
    public static ListNode? DeleteMiddle(ListNode head)
    {
        if (head.next == null) return null;

        var slowPointer = new ListNode(-1, head);
        var fastPointer = head;

        while (fastPointer != null && fastPointer.next != null)
        {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }

        slowPointer.next = slowPointer.next.next;

        return head;
    }
}