namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void
        GivenNoDigit_WhenGettingLetterCombinations_ThenReturnsEmptyList()
    {
        SolutionOne.LetterCombinations("").Should().BeEmpty();
    }

    [Fact]
    public void
        GivenOneDigit_WhenGettingLetterCombinations_ThenReturnsExpectedResult()
    {
        SolutionOne.LetterCombinations("2").Should().Equal("a", "b", "c");
    }

    [Fact]
    public void
        GivenMultipleDigit_WhenGettingLetterCombinations_ThenReturnsExpectedResult()
    {
        var result = SolutionOne.LetterCombinations("23").ToArray();
        Array.Sort(result);

        result.Should().Equal("ad", "ae", "af", "bd", "be", "bf", "cd", "ce",
            "cf");
    }
}