using FluentAssertions;

namespace Program.Tests;

public class SolutionTwoTests
{
    [Fact]
    public void GivenOnlyOneCharacter_WhenCompressing_ThenReturnsOne()
    {
        SolutionTwo.Compress(['a']).Should().Be(1);
    }

    [Fact]
    public void
        GivenMultipleCharactersButNoneRepeats_WhenCompressing_ThenReturnsTheLengthOfTheOriginalArray()
    {
        SolutionTwo.Compress(['a', 'B', '!', '3']).Should().Be(4);
    }

    [Fact]
    public void
        GivenMultipleCharactersAndOnlyOneRepeats_WhenCompressing_ThenReturnsTheLengthOfTheExpectedResult()
    {
        SolutionTwo.Compress(['a', 'B', 'B', 'B', '!', '3']).Should().Be(5);
    }

    [Fact]
    public void
        GivenMultipleCharactersAndMoreThanOneRepeat_WhenCompressing_ThenReturnsTheLengthOfTheExpectedResult()
    {
        SolutionTwo.Compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']).Should().Be(6);
    }

    [Fact]
    public void
        GivenMultipleCharactersAndAtLeastOneRepeatsMoreThanNineTimes_WhenCompressing_ThenReturnsTheLengthOfTheExpectedResult()
    {
        SolutionTwo.Compress([
            'a',
            'a',
            'b',
            'b',
            'b',
            'b',
            'b',
            'b',
            'b',
            'b',
            'b',
            'b',
            'b',
            'b',
        ]).Should().Be(5);
    }
}