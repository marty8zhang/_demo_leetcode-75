using FluentAssertions;

namespace Program.Tests;

using Fixtures;

public class SolutionsTests
{
    [Fact]
    public void
        GivenOneSpell_WhenCalculatingSuccessfulPairs_ThenReturnsTheExpectedResult()
    {
        SolutionTwo.SuccessfulPairs([1], [3, 7, 6, 23, 1], 6).Should()
            .Equal([3]);
    }

    [Fact]
    public void
        GivenMultipleSpell_WhenCalculatingSuccessfulPairs_ThenReturnsTheExpectedResult()
    {
        SolutionTwo.SuccessfulPairs([7, 1, 3, 24], [3, 7, 6, 23, 1], 24)
            .Should().Equal([3, 0, 1, 5]);
    }

    [Fact]
    public void
        GivenLargeInputs_WhenCalculatingSuccessfulPairs_ThenReturnsTheExpectedResult()
    {
        SolutionTwo.SuccessfulPairs(LeetCode51.GetSpells(),
                LeetCode51.GetPotions(), LeetCode51.GetSuccess())
            .Should().Equal(LeetCode51.GetExpectedResults());
    }
}