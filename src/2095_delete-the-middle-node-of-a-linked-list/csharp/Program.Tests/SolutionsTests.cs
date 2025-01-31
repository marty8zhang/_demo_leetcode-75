namespace Program.Tests;

using FluentAssertions;
using Utility;

public class SolutionsTests
{
    [Fact]
    public void GivenOnlyOneNode_WhenDeletingTheMiddleNode_ThenReturnsNull()
    {
        SolutionTwo.DeleteMiddle(new ListNode(1)).Should().BeNull();
    }

    [Fact]
    public void
        GivenTwoNodes_WhenDeletingTheMiddleNode_ThenDeletesTheOneIndexedNode()
    {
        var secondNode = new ListNode(2);
        var firstNode = new ListNode(1, secondNode);

        SolutionTwo.DeleteMiddle(firstNode).Should().Be(firstNode);
        firstNode.next.Should().BeNull();
    }

    [Fact]
    public void
        GivenThreeNodes_WhenDeletingTheMiddleNode_ThenDeletesTheOneIndexedNode()
    {
        var thirdNode = new ListNode(3);
        var secondNode = new ListNode(2, thirdNode);
        var firstNode = new ListNode(1, secondNode);

        SolutionTwo.DeleteMiddle(firstNode).Should().Be(firstNode);
        firstNode.next.Should().Be(thirdNode);
    }

    [Fact]
    public void
        GivenFourNodes_WhenDeletingTheMiddleNode_ThenDeletesTheTwoIndexedNode()
    {
        var fourthNode = new ListNode(4);
        var thirdNode = new ListNode(3, fourthNode);
        var secondNode = new ListNode(2, thirdNode);
        var firstNode = new ListNode(1, secondNode);

        SolutionTwo.DeleteMiddle(firstNode).Should().Be(firstNode);
        secondNode.next.Should().Be(fourthNode);
    }

    [Fact]
    public void
        GivenFiveNodes_WhenDeletingTheMiddleNode_ThenDeletesTheTwoIndexedNode()
    {
        var fifthNode = new ListNode(5);
        var fourthNode = new ListNode(4, fifthNode);
        var thirdNode = new ListNode(3, fourthNode);
        var secondNode = new ListNode(2, thirdNode);
        var firstNode = new ListNode(1, secondNode);

        SolutionTwo.DeleteMiddle(firstNode).Should().Be(firstNode);
        secondNode.next.Should().Be(fourthNode);
    }
}