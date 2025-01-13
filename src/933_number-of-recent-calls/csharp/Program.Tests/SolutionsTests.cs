namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void
        GivenARecentCounterClass_WhenPinging_ThenReturnsTheExpectedResult()
    {
        var counter = new SolutionTwo.RecentCounter();

        counter.Ping(1).Should().Be(1);
        counter.Ping(100).Should().Be(2);
        counter.Ping(3001).Should().Be(3);
        counter.Ping(3002).Should().Be(3);
    }
}