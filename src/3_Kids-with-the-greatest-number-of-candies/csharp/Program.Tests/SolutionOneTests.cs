namespace Program.Tests;

using FluentAssertions;

public class SolutionOneTests
{
    [Fact]
    public void GivenCandiesAndExtraCandies_WhenThereIsOneSignificantNumber_ThenReturnOnlyOneTrue()
    {
        SolutionOne.KidsWithCandies([1, 2, 3, 10, 4], 3).Should()
            .Equal([false, false, false, true, false]);
    }

    [Fact]
    public void
        GivenCandiesAndExtraCandies_WhenThereIsNoSignificantNumber_ThenReturnMoreThanOneTrue()
    {
        SolutionOne.KidsWithCandies([1, 2, 3, 5, 4], 3).Should()
            .Equal([false, true, true, true, true]);
    }

    [Fact]
    public void GivenCandiesAndExtraCandies_WhenThereAreDuplicateNumbers_ThenReturnMoreThanOneTrue()
    {
        SolutionOne.KidsWithCandies([3, 2, 3, 1, 1], 1).Should()
            .Equal([true, true, true, false, false]);
    }
}