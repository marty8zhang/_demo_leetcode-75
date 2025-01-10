namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void
        GivenOnlyTwoAsteroidsAndTheyMoveAwayFromEachOther_WhenCalculatingCollision_ThenReturnsTheSameArray()
    {
        SolutionThree.AsteroidCollision([-1, 2]).Should().Equal([-1, 2]);
    }

    [Fact]
    public void
        GivenOnlyTwoAsteroidsAndTheyBothMoveToTheLeft_WhenCalculatingCollision_ThenReturnsTheSameArray()
    {
        SolutionThree.AsteroidCollision([-1, -2]).Should()
            .Equal([-1, -2]);
    }

    [Fact]
    public void
        GivenOnlyTwoAsteroidsAndTheyBothMoveToTheRight_WhenCalculatingCollision_ThenReturnsTheSameArray()
    {
        SolutionThree.AsteroidCollision([1, 2]).Should().Equal([1, 2]);
    }

    [Fact]
    public void
        GivenOnlyTwoAsteroids_WhenCalculatingCollision_ThenReturnsTheBiggerAsteroidWhichMovesToTheLeft()
    {
        SolutionThree.AsteroidCollision([100, -999]).Should()
            .Equal([-999]);
    }

    [Fact]
    public void
        GivenOnlyTwoAsteroids_WhenCalculatingCollision_ThenReturnsTheBiggerAsteroidWhichMovesToTheRight()
    {
        SolutionThree.AsteroidCollision([100, -99]).Should()
            .Equal([100]);
    }

    [Fact]
    public void
        GivenOnlyTwoAsteroidsAndTheyHaveTheSameSizeAndMoveTowardsEachOther_WhenCalculatingCollision_ThenReturnsAnEmptyArray()
    {
        SolutionThree.AsteroidCollision([1000, -1000]).Should()
            .BeEmpty();
    }

    [Fact]
    public void
        GivenMultipleAsteroidsAndTheyNeverCollide_WhenCalculatingCollision_ThenReturnsTheSameArray()
    {
        SolutionThree.AsteroidCollision([-2, -1, 1, 2]).Should()
            .Equal([-2, -1, 1, 2]);
    }

    [Fact]
    public void
        GivenMultipleAsteroidsWithCollisions_WhenCalculatingCollision_ThenReturnsAnArrayThatTheLastAsteroidGoesLeft()
    {
        SolutionThree.AsteroidCollision([-1, 2, -3]).Should()
            .Equal([-1, -3]);
    }

    [Fact]
    public void
        GivenMostAsteroidsGoRightButOnlyTheLastBiggestOneGoesLeft_WhenCalculatingCollision_ThenReturnsOnlyTheLastAsteroid()
    {
        SolutionThree.AsteroidCollision([122, 98, 100, -123]).Should()
            .Equal([-123]);
    }

    [Fact]
    public void
        GivenMultipleAsteroidsWithCollisionsAndTheLastOneExplodes_WhenCalculatingCollision_ThenReturnsTheExpectedResult()
    {
        SolutionThree.AsteroidCollision([5, 10, 3, -5]).Should()
            .Equal([5, 10]);
    }

    [Fact]
    public void
        GivenMultipleAsteroidsWithCollisionsAndTheLastOneExplodesTogetherWithAnotherOne_WhenCalculatingCollision_ThenReturnsTheExpectedResult()
    {
        SolutionThree.AsteroidCollision([1, 4, 2, -4]).Should()
            .Equal([1]);
    }
}