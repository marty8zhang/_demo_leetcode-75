using System.Collections.ObjectModel;

namespace Program.Tests;

using FluentAssertions;
using Utility;

public class SolutionsTests
{
    [Fact]
    public void GivenNoNode_WhenDeletingNode_ThenReturnsNull()
    {
        SolutionTwo.DeleteNode(null, 0).Should().BeNull();
    }

    [Fact]
    public void
        GivenOnlyOneNode_WhenDeletingNode_ThenReturnsNull()
    {
        SolutionTwo.DeleteNode(new TreeNode(0), 0).Should().BeNull();
    }

    [Fact]
    public void
        GivenTwoLevelTreeAnd_WhenDeletingRoot_ThenMovesLeftLeafUp()
    {
        var left = new TreeNode(-100000);
        var right = new TreeNode(100000);
        var root = new TreeNode(11, left, right);

        var result = ConvertToArray(SolutionTwo.DeleteNode(root, 11));

        result.Should().Equal(-100000, null, 100000);
    }

    [Fact]
    public void
        GivenTwoLevelTreeAndNoLeftLeaf_WhenDeletingRoot_ThenReturnsRightLeaf()
    {
        var right = new TreeNode(100000);
        var root = new TreeNode(11, null, right);

        var result = ConvertToArray(SolutionTwo.DeleteNode(root, 11));

        result.Should().Equal(100000);
    }

    [Fact]
    public void
        GivenThreeLevelTree_WhenDeletingNoNode_ThenReturnsSameTree()
    {
        var firstLeaf = new TreeNode(-1);
        var secondLeaf = new TreeNode(1);
        var thirdLeaf = new TreeNode(99);
        var fourthLeaf = new TreeNode(101);
        var leftNode = new TreeNode(0, firstLeaf, secondLeaf);
        var rightNode = new TreeNode(100, thirdLeaf, fourthLeaf);
        var root = new TreeNode(11, leftNode, rightNode);

        var result = ConvertToArray(SolutionTwo.DeleteNode(root, -100000));

        result.Should().Equal(11, 0, 100, -1, 1, 99, 101);
    }

    [Fact]
    public void
        GivenThreeLevelTree_WhenDeletingLeftNode_ThenReturnsExpectedResult()
    {
        var firstLeaf = new TreeNode(-1);
        var secondLeaf = new TreeNode(1);
        var thirdLeaf = new TreeNode(99);
        var fourthLeaf = new TreeNode(101);
        var leftNode = new TreeNode(0, firstLeaf, secondLeaf);
        var rightNode = new TreeNode(100, thirdLeaf, fourthLeaf);
        var root = new TreeNode(11, leftNode, rightNode);

        var result = ConvertToArray(SolutionTwo.DeleteNode(root, 0));

        result.Should().Equal(11, -1, 100, null, 1, 99, 101);
    }

    [Fact]
    public void
        GivenThreeLevelTree_WhenDeletingRightNode_ThenReturnsExpectedResult()
    {
        var firstLeaf = new TreeNode(-1);
        var secondLeaf = new TreeNode(1);
        var leftNode = new TreeNode(0, null, firstLeaf);
        var rightNode = new TreeNode(100, secondLeaf);
        var root = new TreeNode(11, leftNode, rightNode);

        var result = ConvertToArray(SolutionTwo.DeleteNode(root, 100));

        result.Should().Equal(11, 0, 1, null, -1, null, null);
    }

    [Fact]
    public void
        GivenThreeLevelTree_WhenDeletingRoot_ThenReturnsExpectedResult()
    {
        var firstLeaf = new TreeNode(-1);
        var secondLeaf = new TreeNode(1);
        var thirdLeaf = new TreeNode(99);
        var fourthLeaf = new TreeNode(101);
        var leftNode = new TreeNode(0, firstLeaf, secondLeaf);
        var rightNode = new TreeNode(100, thirdLeaf, fourthLeaf);
        var root = new TreeNode(11, leftNode, rightNode);

        var result = ConvertToArray(SolutionTwo.DeleteNode(root, 11));

        result.Should().Equal(1, 0, 100, -1, null, 99, 101);
    }

    [Fact]
    public void
        GivenThreeLevelTree_WhenDeletingThirdLeaf_ThenReturnsExpectedResult()
    {
        var firstLeaf = new TreeNode(-1);
        var secondLeaf = new TreeNode(1);
        var thirdLeaf = new TreeNode(99);
        var fourthLeaf = new TreeNode(101);
        var leftNode = new TreeNode(0, firstLeaf, secondLeaf);
        var rightNode = new TreeNode(100, thirdLeaf, fourthLeaf);
        var root = new TreeNode(11, leftNode, rightNode);

        var result = ConvertToArray(SolutionTwo.DeleteNode(root, 99));

        result.Should().Equal(11, 0, 100, -1, 1, null, 101);
    }

    [Fact]
    public void
        GivenThreeLevelTree_WhenDeletingFourthLeaf_ThenReturnsExpectedResult()
    {
        var firstLeaf = new TreeNode(-1);
        var secondLeaf = new TreeNode(1);
        var fourthLeaf = new TreeNode(101);
        var leftNode = new TreeNode(0, firstLeaf, secondLeaf);
        var rightNode = new TreeNode(100, null, fourthLeaf);
        var root = new TreeNode(11, leftNode, rightNode);

        var result = ConvertToArray(SolutionTwo.DeleteNode(root, 101));

        result.Should().Equal(11, 0, 100, -1, 1, null, null);
    }

    [Fact]
    public void
        GivenFourLevelTreeAndOnlyRightBranch_WhenDeletingRightNode_ThenReturnsExpectedResult()
    {
        var root = ConvertToTree([4, null, 7, 6, 8, 5, null, null, 9]);
        var result = ConvertToArray(SolutionTwo.DeleteNode(root, 7));

        result.Should().Equal(4, null, 6, null, null, 5, 8, null, null, null,
            null, null, null, null, 9);
    }

    private static int?[] ConvertToArray(TreeNode? root)
    {
        if (root == null) return [];

        var result = new Collection<int?>();
        var queue = new Queue<TreeNode?>([root]);

        while (queue.Any(node => node != null))
        {
            var numberOfNodes = queue.Count;
            for (var i = 0; i < numberOfNodes; i++)
            {
                var node = queue.Dequeue();
                result.Add(node?.val);

                queue.Enqueue(node?.left);
                queue.Enqueue(node?.right);
            }
        }

        return result.ToArray();
    }

    private static TreeNode? ConvertToTree(int?[]? values)
    {
        if (values?.Length == null) return null;

        var queueValues = new Queue<int?>(values);
        var root = new TreeNode((int)queueValues.Dequeue());
        var queueParents = new Queue<TreeNode?>([root]);

        while (queueValues.Count > 0)
        {
            var parentsCount = queueParents.Count;
            for (var i = 0; i < parentsCount; i++)
            {
                var parent = queueParents.Dequeue();
                if (parent == null) continue;

                var leftValue = queueValues.Dequeue();
                var rightValue = queueValues.Dequeue();
                var left = leftValue == null
                    ? null
                    : new TreeNode((int)leftValue);
                var right = rightValue == null
                    ? null
                    : new TreeNode((int)rightValue);

                parent.left = left;
                parent.right = right;
                queueParents.Enqueue(left);
                queueParents.Enqueue(right);
            }
        }

        return root;
    }
}