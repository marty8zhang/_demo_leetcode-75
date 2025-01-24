namespace Program.Tests;

using FluentAssertions;
using Fixtures;

public class SolutionsTests
{
    [Fact]
    public void
        GivenOnlyEntranceCell_WhenDeterminingNearestExit_ThenReturnsMinusOne()
    {
        SolutionOnePointOne.NearestExit([['.']], [0, 0]).Should().Be(-1);
    }

    [Fact]
    public void
        GivenOnlyEntranceCellAndWallCell_WhenDeterminingNearestExit_ThenReturnsMinusOne()
    {
        SolutionOnePointOne.NearestExit([['+'], ['.']], [1, 0]).Should().Be(-1);
    }

    [Fact]
    public void
        GivenOnlyEntranceCellAndExitCell_WhenDeterminingNearestExit_ThenReturnsOne()
    {
        SolutionOnePointOne.NearestExit([['.'], ['.']], [1, 0]).Should().Be(1);
    }

    [Fact]
    public void
        GivenEntranceCellSurroundedByWalls_WhenDeterminingNearestExit_ThenReturnsMinusOne()
    {
        SolutionOnePointOne.NearestExit([
                ['.', '+', '.'],
                ['+', '.', '+'],
                ['.', '+', '.'],
            ],
            [1, 1]
        ).Should().Be(-1);
    }

    [Fact]
    public void
        GivenNoWall_WhenDeterminingNearestExit_ThenReturnsExpectedResult()
    {
        SolutionOnePointOne.NearestExit([
                ['.', '.', '.'],
                ['.', '.', '.'],
                ['.', '.', '.'],
            ],
            [1, 1]
        ).Should().Be(1);
    }

    [Fact]
    public void
        GivenOneDirectionalExitPath_WhenDeterminingNearestExit_ThenReturnsExpectedResult()
    {
        SolutionOnePointOne.NearestExit([
                ['+', '+', '+'],
                ['.', '.', '.'],
                ['+', '+', '+'],
            ],
            [1, 0]
        ).Should().Be(2);
    }

    [Fact]
    public void
        GivenExitPathWithTurn_WhenDeterminingNearestExit_ThenReturnsExpectedResult()
    {
        SolutionOnePointOne.NearestExit([
                ['+', '+', '.', '+'],
                ['.', '.', '.', '+'],
                ['+', '+', '+', '.'],
            ],
            [1, 0]
        ).Should().Be(3);
    }

    [Fact]
    public void
        GivenMoreThanOneExitPath_WhenDeterminingNearestExit_ThenReturnsExpectedResult()
    {
        SolutionOnePointOne.NearestExit([
                ['+', '+', '.', '+'],
                ['.', '.', '.', '+'],
                ['+', '.', '+', '.'],
            ],
            [1, 0]
        ).Should().Be(2);
    }

    [Fact]
    public void
        GivenHugeMaze_WhenDeterminingNearestExit_ThenReturnsExpectedResult()
    {
        SolutionOnePointOne
            .NearestExit(HundredByHundredNoExitMaze.Get(), [1, 0]).Should()
            .Be(-1);
    }
}