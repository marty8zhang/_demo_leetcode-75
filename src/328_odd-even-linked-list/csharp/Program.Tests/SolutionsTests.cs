namespace Program.Tests;

using FluentAssertions;
using Utility;

public class SolutionsTests
{
    [Fact]
    public void
        GivenOnlyOneNodeOnTheLinkedList_WhenReordering_ThenReturnsTheSameList()
    {
        var firstNode = new ListNode(1);

        var result = SolutionOne.OddEvenList(firstNode);

        result.Should().Be(firstNode);
        ConvertToArray(result).Should().Equal([1]);
    }

    [Fact]
    public void
        GivenOnlyTwoNodesOnTheLinkedList_WhenReordering_ThenReturnsTheSameList()
    {
        var secondNode = new ListNode(2);
        var firstNode = new ListNode(1, secondNode);

        var result = SolutionOne.OddEvenList(firstNode);

        result.Should().Be(firstNode);
        ConvertToArray(result).Should().Equal([1, 2]);
    }

    [Fact]
    public void
        GivenThreeNodesOnTheLinkedList_WhenReordering_ThenReturnsTheExpectedResult()
    {
        var thirdNode = new ListNode(3);
        var secondNode = new ListNode(2, thirdNode);
        var firstNode = new ListNode(1, secondNode);

        var result = SolutionOne.OddEvenList(firstNode);

        result.Should().Be(firstNode);
        ConvertToArray(result).Should().Equal([1, 3, 2]);
    }

    [Fact]
    public void
        GivenFourNodesOnTheLinkedList_WhenReordering_ThenReturnsTheExpectedResult()
    {
        var fourthNode = new ListNode(4);
        var thirdNode = new ListNode(3, fourthNode);
        var secondNode = new ListNode(2, thirdNode);
        var firstNode = new ListNode(1, secondNode);

        var result = SolutionOne.OddEvenList(firstNode);

        result.Should().Be(firstNode);
        ConvertToArray(result).Should().Equal([1, 3, 2, 4]);
    }

    [Fact]
    public void
        GivenFiveNodesOnTheLinkedList_WhenReordering_ThenReturnsTheExpectedResult()
    {
        var fifthNode = new ListNode(5);
        var fourthNode = new ListNode(4, fifthNode);
        var thirdNode = new ListNode(3, fourthNode);
        var secondNode = new ListNode(2, thirdNode);
        var firstNode = new ListNode(1, secondNode);

        var result = SolutionOne.OddEvenList(firstNode);

        result.Should().Be(firstNode);
        ConvertToArray(result).Should().Equal([1, 3, 5, 2, 4]);
    }

    private int[] ConvertToArray(ListNode head)
    {
        var result = new List<int>();
        var current = head;

        while (current != null)
        {
            result.Add(current.val);
            current = current.next;
        }

        return result.ToArray();
    }
}