using FluentAssertions;

namespace Program.Tests;

public class SolutionsTests
{
    [Fact]
    public void GivenNoVowelInTheString_WhenCalculatingMaxVowelCount_ThenReturnsZero()
    {
        SolutionOne.MaxVowels("bcdfjklmn", 1).Should().Be(0);
    }

    [Fact]
    public void GivenAllVowelInTheString_WhenCalculatingMaxVowelCount_ThenReturnsTheValueOfK()
    {
        SolutionOne.MaxVowels("aeiou", 5).Should().Be(5);
    }

    [Fact]
    public void
        GivenSeveralVowelInTheStringAndKIsGreaterThanOne_WhenCalculatingMaxVowelCount_ThenReturnsTheExpectedMaxCount()
    {
        SolutionOne.MaxVowels("leetcode", 3).Should().Be(2);
    }
}