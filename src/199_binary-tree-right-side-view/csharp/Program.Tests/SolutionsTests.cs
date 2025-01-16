namespace Program.Tests;

using FluentAssertions;
using Utility;

public class SolutionsTests
{
    [Fact]
    public void GivenNoNode_WhenViewingFromRightSide_ThenReturnsAnEmptyArray()
    {
        var solution = new SolutionOne();

        solution.RightSideView(null).Should().Equal(new List<int>());
    }

    [Fact]
    public void
        GivenOnlyOneNode_WhenViewingFromRightSide_ThenReturnsAnArrayWithOnlyRootValue()
    {
        var solution = new SolutionOne();
        solution.RightSideView(new TreeNode(0)).Should()
            .Equal(new List<int> { 0 });
    }

    [Fact]
    public void
        GivenATwoLayeredBinaryTreeWithFullLeafs_WhenViewingFromRightSide_ThenReturnsTheExpectedResult()
    {
        var left = new TreeNode(1);
        var right = new TreeNode(0);
        var root = new TreeNode(0, left, right);

        var solution = new SolutionOne();
        solution.RightSideView(root).Should()
            .Equal(new List<int> { 0, 0 });
    }

    [Fact]
    public void
        GivenATwoLayeredBinaryTreeWithOnlyLeftLeaf_WhenViewingFromRightSide_ThenReturnsTheExpectedResult()
    {
        var left = new TreeNode(1);
        var root = new TreeNode(0, left);

        var solution = new SolutionOne();
        solution.RightSideView(root).Should()
            .Equal(new List<int> { 0, 1 });
    }

    [Fact]
    public void
        GivenAThreeLayeredBinaryTreeWithFullLeafs_WhenViewingFromRightSide_ThenReturnsTheExpectedResult()
    {
        var firstLeaf = new TreeNode(3);
        var secondLeaf = new TreeNode(4);
        var thirdLeaf = new TreeNode(5);
        var fourthLeaf = new TreeNode(6);
        var left = new TreeNode(1, firstLeaf, secondLeaf);
        var right = new TreeNode(2, thirdLeaf, fourthLeaf);
        var root = new TreeNode(0, left, right);

        var solution = new SolutionOne();
        solution.RightSideView(root).Should()
            .Equal(new List<int> { 0, 2, 6 });
    }

    [Fact]
    public void
        GivenAThreeLayeredBinaryTreeWithPartialLeafs_WhenViewingFromRightSide_ThenReturnsTheExpectedResult()
    {
        var firstLeaf = new TreeNode(3);
        var secondLeaf = new TreeNode(4);
        var left = new TreeNode(1, firstLeaf, secondLeaf);
        var right = new TreeNode(2);
        var root = new TreeNode(0, left, right);

        var solution = new SolutionOne();
        solution.RightSideView(root).Should()
            .Equal(new List<int> { 0, 2, 4 });
    }
}