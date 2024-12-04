namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void GivenNoPivotIndexInNums_WhenCalculatingThePivotIndex_ThenReturnsMinusOne()
    {
        SolutionTwo.PivotIndex([1, 2, 3]).Should().Be(-1);
    }

    [Fact]
    public void
        GivenThePivotIndexIsAtTheLeftEdgeOfNums_WhenCalculatingThePivotIndex_ThenReturnsZero()
    {
        SolutionTwo.PivotIndex([2, 1, -1]).Should().Be(0);
    }

    [Fact]
    public void
        GivenThePivotIndexIsAtTheRightEdgeOfNums_WhenCalculatingThePivotIndex_ThenReturnsTheLastIndexOfNums()
    {
        SolutionTwo.PivotIndex([-2, 2, 3]).Should().Be(2);
    }

    [Fact]
    public void
        GivenThePivotIndexIsInTheMiddleOfNums_WhenCalculatingThePivotIndex_ThenReturnsTheExpectedResult()
    {
        SolutionTwo.PivotIndex([1, 7, 3, 6, 5, 6]).Should().Be(3);
    }
}