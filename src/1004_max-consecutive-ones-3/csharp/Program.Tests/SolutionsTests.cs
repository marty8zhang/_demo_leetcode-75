using FluentAssertions;

namespace Program.Tests;

public class SolutionsTests
{
    [Fact]
    public void GivenTheLengthOfNumsIsZero_WhenCalculatingTheLongestOnes_ThenReturnsZero()
    {
        SolutionTwo.LongestOnes([], 0).Should().Be(0);
    }

    [Fact]
    public void
        GivenKIsOne_WhenCalculatingTheLongestOnes_ThenReturnsTheGreatestCountOfConsecutiveOnes()
    {
        SolutionTwo.LongestOnes([1, 1, 0, 0, 1, 0, 1, 1, 1], 0).Should().Be(3);
    }

    [Fact]
    public void
        GivenKEqualsTheLengthOfNums_WhenCalculatingTheLongestOnes_ThenReturnsTheLengthOfNums()
    {
        SolutionTwo.LongestOnes([1, 1, 0, 0, 0, 1, 1, 1, 0], 9).Should().Be(9);
    }

    [Fact]
    public void
        GivenKIsLessThanTheLengthOfNumsButGreaterThanTheTotalNumberOfZeros_WhenCalculatingTheLongestOnes_ThenReturnsTheLengthOfNums()
    {
        SolutionTwo.LongestOnes([1, 1, 0, 0, 0, 1, 1, 1, 0], 5).Should().Be(9);
    }

    [Fact]
    public void
        GivenKIsLessThanBothTheLengthOfNumsAndTheTotalNumberOfZerosAndTheLongestOnesSitAtTheBeginningOfNums_WhenCalculatingTheLongestOnes_ThenReturnsTheLengthOfNums()
    {
        SolutionTwo.LongestOnes([1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1], 3)
            .Should().Be(10);
    }

    [Fact]
    public void
        GivenKIsLessThanBothTheLengthOfNumsAndTheTotalNumberOfZerosAndTheLongestOnesSitInTheMiddleOfNums_WhenCalculatingTheLongestOnes_ThenReturnsTheLengthOfNums()
    {
        SolutionTwo.LongestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
            .Should().Be(10);
    }

    [Fact]
    public void
        GivenKIsLessThanBothTheLengthOfNumsAndTheTotalNumberOfZerosAndTheLongestOnesSitAtTheEndOfNums_WhenCalculatingTheLongestOnes_ThenReturnsTheLengthOfNums()
    {
        SolutionTwo.LongestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
            .Should().Be(10);
    }
}