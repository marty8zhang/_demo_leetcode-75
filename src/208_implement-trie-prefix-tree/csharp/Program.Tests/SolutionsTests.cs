namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void GivenTrie_WhenCalling_ThenReturnsExpectedResults()
    {
        var trie = new SolutionTwo.Trie();

        trie.Insert("apple");

        trie.Search("apple").Should().BeTrue();
        trie.StartsWith("apple").Should().BeTrue();
        trie.Search("app").Should().BeFalse();
        trie.StartsWith("app").Should().BeTrue();

        trie.Insert("app");

        trie.Search("app").Should().BeTrue();

        trie.Insert("app");
    }
}