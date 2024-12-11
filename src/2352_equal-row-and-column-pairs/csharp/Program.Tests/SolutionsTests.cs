namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void GivenNoEqualRowAndColumnPair_WhenCalculatingEqualRowAndColumnPairs_ThenReturnsZero()
    {
        SolutionOne.EqualPairs([
            [3, 4, 1],
            [1, 7, 6],
            [2, 7, 7],
        ]).Should().Be(0);
    }

    [Fact]
    public void
        GivenEqualRowAndColumnPairsAndNoDuplicateRowsOrColumns_WhenCalculatingEqualRowAndColumnPairs_ThenReturnsTheExpectedResult()
    {
        SolutionOne.EqualPairs([
            [3, 2, 1, 3],
            [1, 7, 6, 2],
            [2, 7, 7, 1],
            [3, 1, 4, 3],
        ]).Should().Be(2);
    }

    [Fact]
    public void
        GivenEqualRowAndColumnPairsAndDuplicateRows_WhenCalculatingEqualRowAndColumnPairs_ThenReturnsTheExpectedResult()
    {
        SolutionOne.EqualPairs([
            [3, 1, 2, 2],
            [1, 4, 4, 5],
            [2, 4, 2, 2],
            [2, 4, 2, 2],
        ]).Should().Be(3);
    }

    [Fact]
    public void
        GivenEqualRowAndColumnPairsAndDuplicateColumns_WhenCalculatingEqualRowAndColumnPairs_ThenReturnsTheExpectedResult()
    {
        SolutionOne.EqualPairs([
            [3, 1, 2, 2],
            [1, 4, 4, 4],
            [2, 4, 2, 2],
            [2, 5, 2, 2],
        ]).Should().Be(3);
    }
}