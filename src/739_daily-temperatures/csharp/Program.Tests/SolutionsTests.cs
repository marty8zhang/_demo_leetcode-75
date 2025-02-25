namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void
        GivenOneTemperature_WhenCalculatingDaysToNextWarmerDay_ThenReturnsOneZero()
    {
        SolutionOnePointOne.DailyTemperatures([100]).Should().Equal([0]);
    }

    [Fact]
    public void
        GivenAllTemperaturesAreInDescOrder_WhenCalculatingDaysToNextWarmerDay_ThenReturnsAllZeros()
    {
        SolutionOnePointOne.DailyTemperatures([100, 50, 30]).Should()
            .Equal([0, 0, 0]);
    }

    [Fact]
    public void
        GivenSomeConsecutiveDaysHaveSameTemperature_WhenCalculatingDaysToNextWarmerDay_ThenReturnsExpectedResult()
    {
        SolutionOnePointOne.DailyTemperatures([30, 40, 40, 50]).Should()
            .Equal([1, 2, 1, 0]);
    }

    [Fact]
    public void
        GivenSeveralTemperatures_WhenCalculatingDaysToNextWarmerDay_ThenReturnsExpectedResult()
    {
        SolutionOnePointOne.DailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
            .Should().Equal([1, 1, 4, 2, 1, 1, 0, 0]);
        SolutionOnePointOne
            .DailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70])
            .Should().Equal([8, 1, 5, 4, 3, 2, 1, 1, 0, 0]);
    }
}