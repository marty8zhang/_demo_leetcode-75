using FluentAssertions;

namespace Program.Tests;

public class SolutionsTests
{
    [Fact]
    public void GivenMOrNIsOne_WhenCalculatingUniquePaths_ThenReturnsOne()
    {
        SolutionTwo.UniquePaths(1, 1).Should().Be(1);
        SolutionTwo.UniquePaths(1, 2).Should().Be(1);
        SolutionTwo.UniquePaths(3, 1).Should().Be(1);

        SolutionTwo.UniquePaths2DArray(1, 1).Should().Be(1);
        SolutionTwo.UniquePaths2DArray(1, 2).Should().Be(1);
        SolutionTwo.UniquePaths2DArray(3, 1).Should().Be(1);
    }

    [Fact]
    public void GivenBothMAndNAreTwo_WhenCalculatingUniquePaths_ThenReturnsTwo()
    {
        SolutionTwo.UniquePaths(2, 2).Should().Be(2);

        SolutionTwo.UniquePaths2DArray(2, 2).Should().Be(2);
    }

    [Fact]
    public void
        GivenMIsThreeAndNIsTwo_WhenCalculatingUniquePaths_ThenReturnsThree()
    {
        SolutionTwo.UniquePaths(3, 2).Should().Be(3);

        SolutionTwo.UniquePaths2DArray(3, 2).Should().Be(3);
    }

    [Fact]
    public void
        GivenMIsThreeAndNIsSeven_WhenCalculatingUniquePaths_ThenReturns28()
    {
        SolutionTwo.UniquePaths(3, 7).Should().Be(28);

        SolutionTwo.UniquePaths2DArray(3, 7).Should().Be(28);
    }

    [Fact]
    public void
        GivenMIs51AndNIs9_WhenCalculatingUniquePaths_ThenReturnsTheExpectedResult()
    {
        SolutionTwo.UniquePaths(51, 9).Should().Be(1916797311);

        SolutionTwo.UniquePaths2DArray(51, 9).Should().Be(1916797311);
    }
}