namespace Program.Tests;

using FluentAssertions;

public class SolutionOneTests
{
    [Fact]
    public void GivenTwoStringsHavingTheSameLength_WhenMerging_ThenReturnExpectedResult()
    {
        var result = SolutionOne.MergeAlternately("hello", "world");

        result.Should().Be("hweolrllod");
    }

    [Fact]
    public void GivenFirstStringIsLongerThanSecondString_WhenMerging_ThenReturnExpectedResult()
    {
        var result = SolutionOne.MergeAlternately("fantastic", "world");

        result.Should().Be("fwaonrtladstic");
    }

    [Fact]
    public void GivenFirstStringIsShorterThanSecondString_WhenMerging_ThenReturnExpectedResult()
    {
        var result = SolutionOne.MergeAlternately("hello", "csharp");

        result.Should().Be("hceslhlaorp");
    }
}