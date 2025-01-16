namespace Program.Tests;

using FluentAssertions;
using Utility;

public class SolutionsTests
{
    [Fact]
    public void GivenNoNode_WhenCalculatingGoodNodes_ThenReturnsZero()
    {
        var solution = new SolutionThree();
        solution.GoodNodes(null).Should().Be(0);
    }

    [Fact]
    public void GivenOnlyOneNode_WhenCalculatingGoodNodes_ThenReturnsOne()
    {
        var solution = new SolutionThree();
        solution.GoodNodes(new TreeNode(-10001)).Should().Be(1);
    }

    [Fact]
    public void
        GivenATwoLayeredBinaryTreeWithFullLeafs_WhenCalculatingGoodNodes_ThenReturnsOne()
    {
        var leftBadNode = new TreeNode(-10000);
        var rightGoodNode = new TreeNode(10000);
        var root = new TreeNode(0, leftBadNode, rightGoodNode);

        var solution = new SolutionThree();
        solution.GoodNodes(root).Should().Be(2);
    }

    [Fact]
    public void
        GivenATwoLayeredBinaryTreeWithPartialLeafs_WhenCalculatingGoodNodes_ThenReturnsOne()
    {
        var rightBadNode = new TreeNode(-10000);
        var root = new TreeNode(0, null, rightBadNode);

        var solution = new SolutionThree();
        solution.GoodNodes(root).Should().Be(1);
    }

    [Fact]
    public void
        GivenAThreeLayeredBinaryTreeWithFullLeafs_WhenCalculatingGoodNodes_ThenReturnsOne()
    {
        var firstBadLeaf = new TreeNode(-1);
        var secondGoodLeaf = new TreeNode(1);
        var thirdBadLeaf = new TreeNode(19);
        var fourthGoodLeaf = new TreeNode(20);
        var leftBadNode = new TreeNode(-10000, firstBadLeaf, secondGoodLeaf);
        var rightGoodNode = new TreeNode(20, thirdBadLeaf, fourthGoodLeaf);
        var root = new TreeNode(0, leftBadNode, rightGoodNode);

        var solution = new SolutionThree();
        solution.GoodNodes(root).Should().Be(4);
    }

    [Fact]
    public void
        GivenAThreeLayeredBinaryTreeWithPartialLeafs_WhenCalculatingGoodNodes_ThenReturnsOne()
    {
        var firstBadLeaf = new TreeNode(-11);
        var secondBadLeaf = new TreeNode(-1);
        var rightBadNode = new TreeNode(-10, firstBadLeaf, secondBadLeaf);
        var root = new TreeNode(0, null, rightBadNode);

        var solution = new SolutionThree();
        solution.GoodNodes(root).Should().Be(1);
    }
}