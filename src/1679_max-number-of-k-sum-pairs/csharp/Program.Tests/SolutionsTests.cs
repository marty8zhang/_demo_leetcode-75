namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void GivenOnlyOneNumber_WhenCalculatingTheMaxNumberOfPairs_ThenReturnsZero()
    {
        SolutionThree.MaxOperations([6], 6).Should().Be(0);
    }

    [Fact]
    public void GivenNoPairCanBeSummedUpToK_WhenCalculatingTheMaxNumberOfPairs_ThenReturnsZero()
    {
        SolutionThree.MaxOperations([1, 2, 3, 6], 6).Should().Be(0);
    }

    [Fact]
    public void
        GivenOnlyTwoNumbersAndTheyCanBeSummedUpToK_WhenCalculatingTheMaxNumberOfPairs_ThenReturnsOne()
    {
        SolutionThree.MaxOperations([1, 5], 6).Should().Be(1);
    }

    [Fact]
    public void
        GivenSeveralNumbersAndOnlyOnePairCanBeSummedUpToK_WhenCalculatingTheMaxNumberOfPairs_ThenReturnsOne()
    {
        SolutionThree.MaxOperations([1, 2, 3, 5], 6).Should().Be(1);
    }

    [Fact]
    public void
        GivenSeveralPairsCanBeSummedUpToK_WhenCalculatingTheMaxNumberOfPairs_ThenReturnsTheExpectedResult()
    {
        SolutionThree.MaxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3)
            .Should().Be(4);
    }
}