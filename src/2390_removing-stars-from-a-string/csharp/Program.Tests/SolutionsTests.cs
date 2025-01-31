namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void GivenNoStarInTheString_WhenRemovingStars_ThenReturnsTheSameString()
    {
        SolutionThree.RemoveStars("thereisnostar").Should().Be("thereisnostar");
    }

    [Fact]
    public void
        GivenMultipleNonRepeatingStarInTheString_WhenRemovingStars_ThenReturnsTheExpectedResult()
    {
        SolutionThree.RemoveStars("the*re*arestars*").Should().Be("thrarestar");
    }

    [Fact]
    public void GivenRepeatingStarInTheString_WhenRemovingStars_ThenReturnsTheExpectedResult()
    {
        SolutionThree.RemoveStars("the***reare**stars**").Should().Be("reasta");
    }

    [Fact]
    public void
        GivenRepeatingStarInTheStringButNotAllCanBeRemovedInASequentialOrder_WhenRemovingStars_ThenReturnsTheExpectedResult()
    {
        SolutionThree.RemoveStars("t*herea*re***stars**").Should().Be("hersta");
    }
}