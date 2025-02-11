using FluentAssertions;

namespace Program.Tests;

public class SolutionsTests
{
    [Fact]
    public void
        GivenNBeingThree_WhenCalculatingTribonacciNumber_ThenReturnsTwo()
    {
        SolutionThree.Tribonacci(3).Should().Be(2);
    }

    [Fact]
    public void
        GivenNBeingFour_WhenCalculatingTribonacciNumber_ThenReturnsFour()
    {
        SolutionThree.Tribonacci(4).Should().Be(4);
    }

    [Fact]
    public void
        GivenNBeingThirtySeven_WhenCalculatingTribonacciNumber_ThenReturnsExpectedResult()
    {
        SolutionThree.Tribonacci(37).Should().Be(2082876103);
    }
}