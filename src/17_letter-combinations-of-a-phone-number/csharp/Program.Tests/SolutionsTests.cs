namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void
        GivenNoDigit_WhenGettingLetterCombinations_ThenReturnsEmptyList()
    {
        SolutionOne.LetterCombinations("").Should().BeEmpty();
        SolutionTwo.LetterCombinations("").Should().BeEmpty();
    }

    [Fact]
    public void
        GivenOneDigit_WhenGettingLetterCombinations_ThenReturnsExpectedResult()
    {
        SolutionOne.LetterCombinations("2").Should().Equal("a", "b", "c");
        SolutionTwo.LetterCombinations("2").Should().Equal("a", "b", "c");
    }

    [Fact]
    public void
        GivenMultipleDigit_WhenGettingLetterCombinations_ThenReturnsExpectedResult()
    {
        var result1 = SolutionOne.LetterCombinations("23").ToArray();
        Array.Sort(result1);
        var result2 = SolutionTwo.LetterCombinations("23").ToArray();
        Array.Sort(result2);

        result1.Should().Equal("ad", "ae", "af", "bd", "be", "bf", "cd", "ce",
            "cf");
        result2.Should().Equal("ad", "ae", "af", "bd", "be", "bf", "cd", "ce",
            "cf");
    }
}