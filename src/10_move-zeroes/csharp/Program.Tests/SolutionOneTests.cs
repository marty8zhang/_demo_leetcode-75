namespace Program.Tests;

using FluentAssertions;

public class SolutionOneTests
{
    [Fact]
    public void GivenOnlyAZeroInTheArray_WhenMovingZeroes_ThenDoesNotModifyTheArray()
    {
        int[] nums = [0];

        SolutionOne.MoveZeroes(nums);

        nums.Should().Equal([0]);
    }

    [Fact]
    public void GivenOnlyANonZeroIntegerInTheArray_WhenMovingZeroes_ThenDoesNotModifyTheArray()
    {
        int[] nums = [-1];

        SolutionOne.MoveZeroes(nums);

        nums.Should().Equal([-1]);
    }

    [Fact]
    public void GivenNonZeroIntegersOnlyInTheArray_WhenMovingZeroes_ThenDoesNotModifyTheArray()
    {
        int[] nums = [2, 3, 1, -1, 7];

        SolutionOne.MoveZeroes(nums);

        nums.Should().Equal([2, 3, 1, -1, 7]);
    }

    [Fact]
    public void GivenOneZeroAtTheEndOfTheArray_WhenMovingZeroes_ThenDoesNotModifyTheArray()
    {
        int[] nums = [2, 3, 1, -1, 0];

        SolutionOne.MoveZeroes(nums);

        nums.Should().Equal([2, 3, 1, -1, 0]);
    }

    [Fact]
    public void GivenOneZeroNotAtTheEndOfTheArray_WhenMovingZeroes_ThenMoveTheZeroToTheEnd()
    {
        int[] nums = [2, 3, 0, -1, 7];

        SolutionOne.MoveZeroes(nums);

        nums.Should().Equal([2, 3, -1, 7, 0]);
    }

    [Fact]
    public void
        GivenMoreThanOneZerosNotAtTheEndOfTheArray_WhenMovingZeroes_ThenMoveTheZeroToTheEnd()
    {
        int[] nums = [0, 3, 0, -1, 0];

        SolutionOne.MoveZeroes(nums);

        nums.Should().Equal([3, -1, 0, 0, 0]);
    }
}