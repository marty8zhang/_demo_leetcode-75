namespace Program.Tests;

using FluentAssertions;
using Utility;

public class SolutionsTests
{
    [Fact]
    public void
        GivenNoNodeOnBinaryTree_WhenCalculatingMaxDepth_ThenReturnsZero()
    {
        SolutionOne.MaxDepth(null).Should().Be(0);
    }

    [Fact]
    public void
        GivenOnlyOneNodeOnBinaryTree_WhenCalculatingMaxDepth_ThenReturnsOne()
    {
        SolutionOne.MaxDepth(new TreeNode(0)).Should().Be(1);
    }

    [Fact]
    public void
        GivenRootOnlyHasLeftLeafOnBinaryTree_WhenCalculatingMaxDepth_ThenReturnsTwo()
    {
        var left = new TreeNode(1);
        var root = new TreeNode(0, left);

        SolutionOne.MaxDepth(root).Should().Be(2);
    }

    [Fact]
    public void
        GivenRootOnlyHasRightLeafOnBinaryTree_WhenCalculatingMaxDepth_ThenReturnsTwo()
    {
        var right = new TreeNode(2);
        var root = new TreeNode(0, null, right);

        SolutionOne.MaxDepth(root).Should().Be(2);
    }

    [Fact]
    public void
        GivenFarthestLeafIsOnLevelThreeAndItIsTheLeftmostOnBinaryTree_WhenCalculatingMaxDepth_ThenReturnsThree()
    {
        var leaf = new TreeNode(3);
        var left = new TreeNode(1, leaf);
        var root = new TreeNode(0, left);

        SolutionOne.MaxDepth(root).Should().Be(3);
    }

    [Fact]
    public void
        GivenFarthestLeafIsOnLevelThreeAndItIsTheRightmostOnBinaryTree_WhenCalculatingMaxDepth_ThenReturnsThree()
    {
        var leaf = new TreeNode(6);
        var right = new TreeNode(2, null, leaf);
        var root = new TreeNode(0, null, right);

        SolutionOne.MaxDepth(root).Should().Be(3);
    }
}