namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void GivenTrie_WhenCalling_ThenReturnsExpectedResults()
    {
        var trieTwo = new SolutionTwo.Trie();
        var trieThree = new SolutionThree.Trie();

        trieTwo.Insert("apple");
        trieThree.Insert("apple");

        trieTwo.Search("apple").Should().BeTrue();
        trieTwo.StartsWith("apple").Should().BeTrue();
        trieTwo.Search("app").Should().BeFalse();
        trieTwo.StartsWith("app").Should().BeTrue();
        trieThree.Search("apple").Should().BeTrue();
        trieThree.StartsWith("apple").Should().BeTrue();
        trieThree.Search("app").Should().BeFalse();
        trieThree.StartsWith("app").Should().BeTrue();

        trieTwo.Insert("app");
        trieThree.Insert("app");

        trieTwo.Search("app").Should().BeTrue();
        trieThree.Search("app").Should().BeTrue();

        trieTwo.Insert("app");
        trieThree.Insert("app");
    }
}