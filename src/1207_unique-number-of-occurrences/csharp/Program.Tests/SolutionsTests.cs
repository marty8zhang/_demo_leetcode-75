namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void GivenOnlyOneIntegerInArr_WhenCalculatingTheUniqueOccurrences_ThenReturnsTrue()
    {
        SolutionOne.UniqueOccurrences([123]).Should().BeTrue();
    }

    [Fact]
    public void
        GivenOnlyTwoDistinctIntegersInArr_WhenCalculatingTheUniqueOccurrences_ThenReturnsFalse()
    {
        SolutionOne.UniqueOccurrences([1, 2]).Should().BeFalse();
    }

    [Fact]
    public void
        GivenMoreThanTwoDistinctIntegersAndTheyEachHaveDifferentNumberOfOccurrencesInArr_WhenCalculatingTheUniqueOccurrences_ThenReturnsTrue()
    {
        SolutionOne.UniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]).Should().BeTrue();
    }

    [Fact]
    public void
        GivenMoreThanTwoDistinctIntegersAndNotAllOfThemHaveDifferentNumberOfOccurrencesInArr_WhenCalculatingTheUniqueOccurrences_ThenReturnsFalse()
    {
        SolutionOne.UniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0, -3]).Should().BeFalse();
    }
}