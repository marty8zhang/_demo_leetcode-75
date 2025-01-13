namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void GivenNothingToDecode_WhenDecoding_ThenReturnsTheSameString()
    {
        SolutionTwo.DecodeString("abcd").Should().Be("abcd");
    }

    [Fact]
    public void
        GivenOnlyOneCharToDecode_WhenDecoding_ThenReturnsTheDecodedString()
    {
        SolutionTwo.DecodeString("ab2[c]d").Should().Be("abccd");
    }

    [Fact]
    public void
        GivenOnlyOneStringToDecode_WhenDecoding_ThenReturnsTheDecodedString()
    {
        SolutionTwo.DecodeString("a3[bc]d").Should().Be("abcbcbcd");
    }

    [Fact]
    public void
        GivenConsecutiveDecodingNeeded_WhenDecoding_ThenReturnsTheDecodedString()
    {
        SolutionTwo.DecodeString("a2[bc]3[d]e").Should().Be("abcbcddde");
    }

    [Fact]
    public void
        GivenMultipleDecodingNeededOnTheSameLevel_WhenDecoding_ThenReturnsTheDecodedString()
    {
        SolutionTwo.DecodeString("a2[b]cd3[ef]g").Should().Be("abbcdefefefg");
    }

    [Fact]
    public void
        GivenNestedDecodingNeeded_WhenDecoding_ThenReturnsTheDecodedString()
    {
        SolutionTwo.DecodeString("a2[bc13[de]f]g").Should().Be(
            "abcdededededededededededededefbcdededededededededededededefg");
    }
}