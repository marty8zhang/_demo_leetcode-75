using FluentAssertions;

namespace Program.Tests;

public class SolutionOneTests
{
    [Fact]
    public void GivenTwoStrings_WhenNoCommonDivisor_ThenReturnEmptyString()
    {
        SolutionOne.GcdOfStrings("ABC", "DEF").Should().Be("");
    }

    [Fact]
    public void GivenTwoSimilarStrings_WhenNoCommonDivisor_ThenReturnEmptyString()
    {
        SolutionOne.GcdOfStrings("ABCDABC", "ABC").Should().Be("");
    }

    [Fact]
    public void GivenTwoStrings_WhenGreatestCommonDivisorIsOneCharLong_ThenReturnTheChar()
    {
        SolutionOne.GcdOfStrings("AAAAA", "A").Should().Be("A");
    }

    [Fact]
    public void
        GivenTwoStrings_WhenOneCharRepeatsInBothButStringsHaveUnevenLengths_ThenReturnTheChar()
    {
        SolutionOne.GcdOfStrings(new string('A', 7), new string('A', 4)).Should().Be("A");
    }

    [Fact]
    public void
        GivenTwoStrings_WhenOneCharRepeatsInBothAndStringsHaveEvenLengths_ThenReturnTheExpectedResult()
    {
        SolutionOne.GcdOfStrings(new string('A', 8), new string('A', 6)).Should().Be("AA");
    }

    [Fact]
    public void
        GivenTwoStrings_WhenASubstringRepeatsInBothButStringsHaveUnevenLengths_ThenReturnTheSubString()
    {
        SolutionOne.GcdOfStrings(string.Concat(Enumerable.Repeat("ABC", 3)),
                string.Concat(Enumerable.Repeat("ABC", 2)))
            .Should().Be("ABC");
    }

    [Fact]
    public void
        GivenTwoStrings_WhenASubstringRepeatsInBothAndStringsHaveEvenLengths_ThenReturnTheExpectedResult()
    {
        SolutionOne.GcdOfStrings(string.Concat(Enumerable.Repeat("ABC", 4)),
                string.Concat(Enumerable.Repeat("ABC", 2)))
            .Should().Be("ABCABC");
    }

    [Fact]
    public void GivenTwoStrings_WhenOneRepeatsInAnother_ThenReturnTheShorterOne()
    {
        SolutionOne.GcdOfStrings(string.Concat(Enumerable.Repeat("ABCDEFG", 3)), "ABCDEFG")
            .Should().Be("ABCDEFG");
    }
}