namespace Program.Tests;

using FluentAssertions;
using Utility;

public class SolutionsTests
{
    [Fact]
    public void GivenOnlyOneNode_WhenCalculatingMaxLevelSum_ThenReturnsOne()
    {
        SolutionTwo.MaxLevelSum(new TreeNode(-100000)).Should().Be(1);
    }

    [Fact]
    public void
        GivenATwoLevelBinaryTreeAndSecondLevelSumIsLesser_WhenCalculatingMaxLevelSum_ThenReturnsOne()
    {
        var left = new TreeNode(1);
        var right = new TreeNode(-3);
        var root = new TreeNode(-1, left, right);

        SolutionTwo.MaxLevelSum(root).Should().Be(1);
    }

    [Fact]
    public void
        GivenATwoLevelBinaryTreeAndSecondLevelSumIsSameAsRoot_WhenCalculatingMaxLevelSum_ThenReturnsOne()
    {
        var left = new TreeNode(2);
        var right = new TreeNode(-3);
        var root = new TreeNode(-1, left, right);

        SolutionTwo.MaxLevelSum(root).Should().Be(1);
    }

    [Fact]
    public void
        GivenATwoLevelBinaryTreeAndSecondLevelSumIsGreater_WhenCalculatingMaxLevelSum_ThenReturnsTwo()
    {
        var left = new TreeNode(3);
        var right = new TreeNode(-3);
        var root = new TreeNode(-1, left, right);

        SolutionTwo.MaxLevelSum(root).Should().Be(2);
    }

    [Fact]
    public void
        GivenAThreeLevelBinaryTreeAndRootIsGreatest_WhenCalculatingMaxLevelSum_ThenReturnsOne()
    {
        var firstLeaf = new TreeNode(-1);
        var secondLeaf = new TreeNode(-2);
        var left = new TreeNode(-4, null, firstLeaf);
        var right = new TreeNode(3, secondLeaf);
        var root = new TreeNode(-1, left, right);

        SolutionTwo.MaxLevelSum(root).Should().Be(1);
    }

    [Fact]
    public void
        GivenAThreeLevelBinaryTreeAndSecondLevelSumIsGreatest_WhenCalculatingMaxLevelSum_ThenReturnsTwo()
    {
        var firstLeaf = new TreeNode(1);
        var secondLeaf = new TreeNode(-2);
        var thirdLeaf = new TreeNode(5);
        var fourthLeaf = new TreeNode(-4);
        var left = new TreeNode(4, firstLeaf, secondLeaf);
        var right = new TreeNode(-3, thirdLeaf, fourthLeaf);
        var root = new TreeNode(-1, left, right);

        SolutionTwo.MaxLevelSum(root).Should().Be(2);
    }

    [Fact]
    public void
        GivenAThreeLevelBinaryTreeAndThirdLevelSumIsGreatest_WhenCalculatingMaxLevelSum_ThenReturnsThree()
    {
        var firstLeaf = new TreeNode(-1);
        var secondLeaf = new TreeNode(3);
        var left = new TreeNode(4, firstLeaf, secondLeaf);
        var right = new TreeNode(-3);
        var root = new TreeNode(-1, left, right);

        SolutionTwo.MaxLevelSum(root).Should().Be(3);
    }
}