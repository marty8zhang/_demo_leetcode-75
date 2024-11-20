namespace Program.Tests;

using FluentAssertions;

public class SolutionOneTests
{
    [Fact]
    public void GivenAStringWithOnlyOneWord_WhenReverseWords_ThenReturnsTheSameWord()
    {
        SolutionOne.ReverseWords("test").Should().Be("test");
    }

    [Fact]
    public void GivenAStringWithLeadingAndTrailingSpaces_WhenReverseWords_ThenTrimsTheSpaces()
    {
        SolutionOne.ReverseWords("   test  ").Should().Be("test");
    }

    [Fact]
    public void GivenAStringWithMoreThanOneWords_WhenReverseWords_ThenReturnsTheExpectedResult()
    {
        SolutionOne.ReverseWords("This is a test").Should().Be("test a is This");
    }

    [Fact]
    public void
        GivenAStringWithMoreThanOneWordsAndAdditionalSpacesBetweenWords_WhenReverseWords_ThenReturnsTheExpectedResult()
    {
        SolutionOne.ReverseWords("This  is a   test").Should().Be("test a is This");
    }
}