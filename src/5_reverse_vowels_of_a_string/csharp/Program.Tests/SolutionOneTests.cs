namespace Program.Tests;

using FluentAssertions;

public class SolutionOneTests
{
    [Fact]
    public void GivenAStringWithNoVowel_WhenReverseVowels_ThenReturnsTheOriginalString()
    {
        SolutionOne.ReverseVowels("1234567890bcdfghjklmnpqrstvwxyz").Should()
            .Be("1234567890bcdfghjklmnpqrstvwxyz");
    }

    [Fact]
    public void
        GivenAStringWithOnlyOneRepeatingVowel_WhenReverseVowels_ThenReturnsTheOriginalString()
    {
        SolutionOne.ReverseVowels("aa1aa2aa").Should().Be("aa1aa2aa");
    }

    [Theory]
    [InlineData("abcd")]
    [InlineData("bcde")]
    [InlineData("ghij")]
    [InlineData("opqr")]
    [InlineData("stuv")]
    [InlineData("ABCD")]
    [InlineData("BCDE")]
    [InlineData("GHIJ")]
    [InlineData("OPQR")]
    [InlineData("STUV")]
    public void GivenAStringWithOnlyOneVowel_WhenReverseVowels_ThenReturnsTheOriginalString(
        string s)
    {
        SolutionOne.ReverseVowels(s).Should().Be(s);
    }

    [Fact]
    public void
        GivenAStringWithAnEvenNumberOfVowel_WhenReverseVowels_ThenReturnsExpectedResult()
    {
        SolutionOne.ReverseVowels("IceCreAm").Should().Be("AceCreIm");
    }

    [Fact]
    public void
        GivenAStringWithAnOddNumberOfVowel_WhenReverseVowels_ThenReturnsExpectedResult()
    {
        SolutionOne.ReverseVowels("AIceCreAm").Should().Be("AeceCrIAm");
    }
}