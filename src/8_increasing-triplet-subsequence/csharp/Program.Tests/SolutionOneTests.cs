namespace Program.Tests;

using FluentAssertions;

public class SolutionOneTests
{
    [Fact]
    public void GivenTripletDoesNotExist_WhenChecking_ThenReturnsFalse()
    {
        SolutionOne.IncreasingTriplet([5, 4, 3, 2, 1]).Should().Be(false);
    }

    [Fact]
    public void GivenTripletDoesNotExistAndSomeIntegersAreNegative_WhenChecking_ThenReturnsFalse()
    {
        SolutionOne.IncreasingTriplet([5, 4, -3, 2, -1]).Should().Be(false);
    }

    [Fact]
    public void GivenTripletExistsInTheFirstHalfOfTheIntegers_WhenChecking_ThenReturnsTrue()
    {
        SolutionOne.IncreasingTriplet([1, 4, 6, 2, 2, 1]).Should().Be(true);
    }

    [Fact]
    public void GivenTripletExistsInTheSecondHalfOfTheIntegers_WhenChecking_ThenReturnsTrue()
    {
        SolutionOne.IncreasingTriplet([2, 1, 5, 0, 4, 6]).Should().Be(true);
    }

    [Fact]
    public void GivenTripletExistsAndSomeIntegersAreNegative_WhenChecking_ThenReturnsTrue()
    {
        SolutionOne.IncreasingTriplet([2, 1, 5, -1, 4, 6]).Should().Be(true);
    }
}