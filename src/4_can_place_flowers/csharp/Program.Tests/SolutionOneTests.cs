using FluentAssertions;

namespace Program.Tests;

public class SolutionOneTests
{
    [Fact]
    public void
        GivenAFlowerbed_WhenPlantingANumberOfPlotsWhichEqualsToTheTotalNumberOfPlotsOfTheFlowerbed_ThenReturnsFalse()
    {
        SolutionOne.CanPlaceFlowers([0, 0, 0], 3).Should().BeFalse();
    }

    [Theory]
    [InlineData(new[] { 0 }, 2)]
    [InlineData(new[] { 0, 0, 1 }, 2)]
    [InlineData(new[] { 1, 0, 0, 0, 1 }, 2)]
    [InlineData(new[] { 1, 0, 0, 0, 0, 0, 1 }, 3)]
    public void
        GivenAFlowerbed_WhenPlantingANumberOfPlotsWhichExceedsTheAllowedNumber_ThenReturnsFalse(
            int[] flowerbed, int n)
    {
        SolutionOne.CanPlaceFlowers(flowerbed, n).Should().BeFalse();
    }

    [Fact]
    public void GivenAFlowerbed_WhenPlantingNoPlot_ThenReturnsTrue()
    {
        SolutionOne.CanPlaceFlowers([1, 0, 1], 0).Should().BeTrue();
    }

    [Theory]
    [InlineData(new[] { 0 }, 1)]
    [InlineData(new[] { 0, 0, 1 }, 1)]
    [InlineData(new[] { 1, 0, 0, 0, 1 }, 1)]
    [InlineData(new[] { 1, 0, 0, 0, 0, 0, 1 }, 2)]
    public void
        GivenAFlowerbed_WhenPlantingANumberOfPlotsWhichDoesNotExceedTheAllowedNumber_ThenReturnsTrue(
            int[] flowerbed, int n)
    {
    }
}