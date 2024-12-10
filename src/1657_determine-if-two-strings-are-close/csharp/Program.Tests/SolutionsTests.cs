using FluentAssertions;

namespace Program.Tests;

public class SolutionsTests
{
    [Fact]
    public void
        GivenTheLengthsOfTheTwoWordsAreNotEqual_WhenDeterminingTheTwoStringsAreCloseOrNot_ThenReturnsFalse()
    {
        SolutionOne.CloseStrings("a", "aa").Should().BeFalse();
    }

    [Fact]
    public void
        GivenOneWordContainsCharactersThatTheOtherDoesNot_WhenDeterminingTheTwoStringsAreCloseOrNot_ThenReturnsFalse()
    {
        SolutionOne.CloseStrings("abc", "bcd").Should().BeFalse();
    }

    [Fact]
    public void
        GivenTheNumbersOfCharacterOccurrencesDoNotMatch_WhenDeterminingTheTwoStringsAreCloseOrNot_ThenReturnsFalse()
    {
        SolutionOne.CloseStrings("abcbbc", "cbaabc").Should().BeFalse();
    }

    [Fact]
    public void
        GivenTheCharactersAreNotDuplicatingInEitherWords_WhenDeterminingTheTwoStringsAreCloseOrNot_ThenReturnsTrue()
    {
        SolutionOne.CloseStrings("abcdef", "fbaedc").Should().BeTrue();
    }

    [Fact]
    public void
        GivenTheCharactersAreDuplicatingInEitherWords_WhenDeterminingTheTwoStringsAreCloseOrNot_ThenReturnsTrue()
    {
        SolutionOne.CloseStrings("cabbba", "abbccc").Should().BeTrue();
    }
}