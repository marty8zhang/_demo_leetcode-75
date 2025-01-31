using Utility;

public class SolutionOne
{
    public static ListNode OddEvenList(ListNode head)
    {
        var evenHead = head?.next;
        if (evenHead?.next == null) return head;

        var oddPointer = head;
        var evenPointer = evenHead;

        while (evenPointer?.next != null)
        {
            oddPointer.next = evenPointer.next;
            oddPointer = oddPointer.next;
            evenPointer.next = evenPointer.next?.next;
            evenPointer = evenPointer.next;
        }

        oddPointer.next = evenHead;

        return head;
    }
}