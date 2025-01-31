namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void
        GivenRoomZeroHasNoKey_WhenDeterminingRoomsVisitability_ThenReturnsFalse()
    {
        SolutionOne.CanVisitAllRooms([[], [0, 1]]).Should().BeFalse();

        var solutionTwo = new SolutionTwo();
        solutionTwo.CanVisitAllRooms([[], [0, 1]]).Should().BeFalse();
    }

    [Fact]
    public void
        GivenRoomZeroOnlyHasKeyToItself_WhenDeterminingRoomsVisitability_ThenReturnsFalse()
    {
        SolutionOne.CanVisitAllRooms([[0], [2], [1]]).Should().BeFalse();

        var solutionTwo = new SolutionTwo();
        solutionTwo.CanVisitAllRooms([[0], [2], [1]]).Should().BeFalse();
    }

    [Fact]
    public void
        GivenAvailableKeysNotEnoughToOpenAllRooms_WhenDeterminingRoomsVisitability_ThenReturnsFalse()
    {
        SolutionOne.CanVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]).Should()
            .BeFalse();

        var solutionTwo = new SolutionTwo();
        solutionTwo.CanVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]).Should()
            .BeFalse();
    }

    [Fact]
    public void
        GivenAvailableKeysEnoughToOpenAllRooms_WhenDeterminingRoomsVisitability_ThenReturnsTrue()
    {
        SolutionOne.CanVisitAllRooms([[1], [2], [3], []]).Should().BeTrue();

        var solutionTwo = new SolutionTwo();
        solutionTwo.CanVisitAllRooms([[1], [2], [3], []]).Should().BeTrue();
    }
}