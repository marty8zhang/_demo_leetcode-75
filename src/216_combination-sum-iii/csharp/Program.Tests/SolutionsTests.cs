namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void
        GivenNLessThanThree_WhenDeterminingCombinations_ThenReturnsEmptyArray()
    {
        SolutionTwo.CombinationSum3(2, 1).Should().Equal([]);
        SolutionTwo.CombinationSum3(2, 2).Should().Equal([]);
    }

    [Fact]
    public void
        GivenNoPossibleCombination_WhenDeterminingCombinations_ThenReturnsEmptyArray()
    {
        SolutionTwo.CombinationSum3(4, 9).Should().Equal([]);
        SolutionTwo.CombinationSum3(2, 18).Should().Equal([]);
    }

    [Fact]
    public void
        GivenMultiplePossibleCombinations_WhenDeterminingCombinations_ThenReturnsExpectedResult()
    {
        SolutionTwo.CombinationSum3(3, 9).Should().BeEquivalentTo(
            new List<IList<int>>([
                [1, 2, 6],
                [1, 3, 5],
                [2, 3, 4],
            ]));
    }
}