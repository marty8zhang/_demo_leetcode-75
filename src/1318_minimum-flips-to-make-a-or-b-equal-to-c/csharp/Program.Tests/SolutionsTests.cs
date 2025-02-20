using FluentAssertions;

namespace Program.Tests;

public class SolutionsTests
{
    [Fact]
    public void GivenNoFlipNeeded_WhenCalculatingMinFlips_ThenReturnsZero()
    {
        SolutionOne.MinFlips(1, 2, 3).Should().Be(0);
        SolutionOne.MinFlips(2, 6, 6).Should().Be(0);
    }

    [Fact]
    public void
        GivenFlipsNeeded_WhenCalculatingMinFlips_ThenReturnsExpectedResult()
    {
        SolutionOne.MinFlips(4, 2, 7).Should().Be(1);
        SolutionOne.MinFlips(2, 6, 5).Should().Be(3);
    }
}