namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void GivenAllZerosInNums_WhenCalculatingLongestSubarray_ThenReturnsZero()
    {
        SolutionOne.LongestSubarray([0, 0, 0]).Should().Be(0);
    }

    [Fact]
    public void
        GivenNoZerosInNums_WhenCalculatingLongestSubarray_ThenReturnsTheLengthOfNumsMinusOne()
    {
        SolutionOne.LongestSubarray([1, 1, 1]).Should().Be(2);
    }

    [Fact]
    public void
        GivenOnlyOneZeroInNums_WhenCalculatingLongestSubarray_ThenReturnsTheTotalNumberOfOnesInNums()
    {
        SolutionOne.LongestSubarray([1, 1, 0, 1]).Should().Be(3);
    }

    [Fact]
    public void
        GivenAllZerosExceptConsecutiveOnesInNums_WhenCalculatingLongestSubarray_ThenReturnsTheTotalNumberOfOnesInNums()
    {
        SolutionOne.LongestSubarray([0, 0, 0, 1, 1, 1, 1, 0, 0]).Should().Be(4);
    }

    [Fact]
    public void
        GivenNoConsecutiveZerosInNums_WhenCalculatingLongestSubarray_ThenReturnsTheExpectedResult()
    {
        SolutionOne.LongestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]).Should().Be(5);
    }

    [Fact]
    public void
        GivenConsecutiveZerosInNums_WhenCalculatingLongestSubarray_ThenReturnsTheExpectedResult()
    {
        SolutionOne.LongestSubarray([0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1]).Should().Be(4);
    }
}