namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void GivenAllItemsInBothArraysAreDistinct_WhenFindingDifference_ThenReturnsBothArrays()
    {
        SolutionTwo.FindDifference([1, 2, 3], [4, 5, 6]).Should().BeEquivalentTo(
            new List<IList<int>>
                { new List<int>([1, 2, 3]), new List<int>([4, 5, 6]) });
    }

    [Fact]
    public void
        GivenOnlyTheSecondArrayHavingDistinctIntegers_WhenFindingDifference_ThenReturnsTheFirstArrayAsEmpty()
    {
        SolutionTwo.FindDifference([1, 3, 5], [1, 2, 3, 4, 5]).Should().BeEquivalentTo(
            new List<IList<int>>
                { new List<int>(), new List<int>([2, 4]) });
    }

    [Fact]
    public void
        GivenOnlyTheFirstArrayHavingDistinctIntegers_WhenFindingDifference_ThenReturnsTheSecondArrayAsEmpty()
    {
        SolutionTwo.FindDifference([1, 2, 3, 4, 5], [2, 3, 4]).Should().BeEquivalentTo(
            new List<IList<int>>
                { new List<int>([1, 5]), new List<int>() });
    }

    [Fact]
    public void
        GivenBothArraysHavingDistinctIntegers_WhenFindingDifference_ThenReturnsTheExpectedResult()
    {
        SolutionTwo.FindDifference([1, 2, 3], [2, 4, 6]).Should().BeEquivalentTo(
            new List<IList<int>>
                { new List<int>([1, 3]), new List<int>([4, 6]) });
    }

    [Fact]
    public void
        GivenBothArraysHavingDuplicatedIntegersDistinctOrNot_WhenFindingDifference_ThenReturnsTheExpectedResult()
    {
        SolutionTwo.FindDifference([1, 2, 3, 2, 3, 2], [1, 1, 2, 2, 4]).Should().BeEquivalentTo(
            new List<IList<int>>
                { new List<int>([3]), new List<int>([4]) });
    }
}