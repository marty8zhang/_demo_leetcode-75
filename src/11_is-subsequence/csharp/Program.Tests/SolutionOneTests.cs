using FluentAssertions;

namespace Program.Tests;

public class SolutionOneTests
{
    [Fact]
    public void GivenTAsAnEmptyStringButSIsNot_WhenCheckingIfSIsASubsequenceOfT_ThenReturnsFalse()
    {
        SolutionOne.IsSubsequence("a", "").Should().BeFalse();
    }

    [Fact]
    public void GivenSIsNotASubsequenceOfT_WhenCheckingIfSIsASubsequenceOfT_ThenReturnsFalse()
    {
        SolutionOne.IsSubsequence("acb", "abcde").Should().BeFalse();
    }

    [Fact]
    public void GivenSAsAnEmptyStringButTIsNot_WhenCheckingIfSIsASubsequenceOfT_ThenReturnsTrue()
    {
        SolutionOne.IsSubsequence("", "a").Should().BeTrue();
    }

    [Fact]
    public void GivenBothSAndTAsEmptyStrings_WhenCheckingIfSIsASubsequenceOfT_ThenReturnsTrue()
    {
        SolutionOne.IsSubsequence("", "").Should().BeTrue();
    }

    [Fact]
    public void
        GivenBothSAndTContainOnlyTheSameCharacter_WhenCheckingIfSIsASubsequenceOfT_ThenReturnsTrue()
    {
        SolutionOne.IsSubsequence("a", "a").Should().BeTrue();
    }

    [Fact]
    public void GivenSAndTAreTheSameString_WhenCheckingIfSIsASubsequenceOfT_ThenReturnsTrue()
    {
        SolutionOne.IsSubsequence("abc", "abc").Should().BeTrue();
    }

    [Fact]
    public void GivenSAsASubstringOfT_WhenCheckingIfSIsASubsequenceOfT_ThenReturnsTrue()
    {
        SolutionOne.IsSubsequence("bcd", "abcde").Should().BeTrue();
    }

    [Fact]
    public void GivenSAsASubsequenceOfT_WhenCheckingIfSIsASubsequenceOfT_ThenReturnsTrue()
    {
        SolutionOne.IsSubsequence("ade", "abcde").Should().BeTrue();
    }

    [Fact]
    public void
        GivenSAsASubsequenceOfTAndThereAreRepeatingCharactersInS_WhenCheckingIfSIsASubsequenceOfT_ThenReturnsTrue()
    {
        SolutionOne.IsSubsequence("aad", "aabbccddee").Should().BeTrue();
    }
}