namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void
        GivenTheLargestAltitudeIsAtTheBeginningOfTheTrip_WhenCalculatingTheLargestAltitude_ThenReturnsZero()
    {
        SolutionOne.LargestAltitude([-4, -3, -2, -1, 4, 3, 2]).Should().Be(0);
    }

    [Fact]
    public void
        GivenTheLargestAltitudeIsInTheMiddleOfTheTrip_WhenCalculatingTheLargestAltitude_ThenReturnsTheExpectedResult()
    {
        SolutionOne.LargestAltitude([-5, 1, 5, 0, -7]).Should().Be(1);
    }

    [Fact]
    public void
        GivenTheLargestAltitudeIsAtTheEndOfTheTrip_WhenCalculatingTheLargestAltitude_ThenReturnsTheExpectedResult()
    {
        SolutionOne.LargestAltitude([-100, 43, -10, 67, 1]).Should().Be(1);
    }
}