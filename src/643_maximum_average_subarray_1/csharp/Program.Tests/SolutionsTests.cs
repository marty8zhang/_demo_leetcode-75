using FluentAssertions;

namespace Program.Tests;

public class SolutionsTests
{
    [Fact]
    public void
        GivenOnlyOneNumberInNumsAndKEqualsOne_WhenFindingTheMaxAverage_ThenReturnsTheNumberInNums()
    {
        SolutionTwo.FindMaxAverage([7], 1).Should().Be(7);
    }

    [Fact]
    public void
        GivenSeveralNumbersInNumsAndKEqualsOne_WhenFindingTheMaxAverage_ThenReturnsTheGreatestNumberInNums()
    {
        SolutionTwo.FindMaxAverage([1, 3, 10, 9, 7, -11], 1).Should().Be(10);
    }

    [Fact]
    public void
        GivenKEqualsTheLengthOfNumsAndKIsGreaterThanOne_WhenFindingTheMaxAverage_ThenReturnsTheExpectedAverage()
    {
        SolutionTwo.FindMaxAverage([1, 2, 2], 3).Should().BeApproximately(1.66667, 5);
    }

    [Fact]
    public void
        GivenKIsLessThanTheLengthOfNumsAndKIsGreaterThanOne_WhenFindingTheMaxAverage_ThenReturnsTheExpectedAverage()
    {
        SolutionTwo.FindMaxAverage([1, 12, -5, -6, 50, 3], 4).Should().BeApproximately(12.75, 5);
    }
}