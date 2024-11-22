namespace Program.Tests;

using FluentAssertions;

public class SolutionOneTests
{
    [Fact]
    public void GivenOnlyTwoHeightsAndOneOfThemIsZero_WhenCalculatingMaxArea_ThenReturnsZero()
    {
        SolutionOne.MaxArea([0, 10]).Should().Be(0);
    }

    [Fact]
    public void GivenTwoNonZeroHeights_WhenCalculatingMaxArea_ThenReturnsTheMinValue()
    {
        SolutionOne.MaxArea([2, 10]).Should().Be(2);
    }

    [Fact]
    public void
        GivenMoreThanTwoHeightsAndNoneIsZero_WhenCalculatingMaxArea_ThenReturnsTheExpectedResult()
    {
        SolutionOne.MaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]).Should().Be(49);
    }

    [Fact]
    public void
        GivenMoreThanTwoHeightsAndSomeAreZeros_WhenCalculatingMaxArea_ThenReturnsTheExpectedResult()
    {
        SolutionOne.MaxArea([1, 8, 0, 2, 5, 4, 0, 3, 7]).Should().Be(49);
    }
}