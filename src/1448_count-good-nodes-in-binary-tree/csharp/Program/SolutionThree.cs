using Utility;

public class SolutionThree
{
    private int count = 0;

    public int GoodNodes(TreeNode? root)
    {
        this.TraverseAndUpdateCount(root, root?.val);

        return count;
    }

    private void TraverseAndUpdateCount(TreeNode? node, int? maxValue)
    {
        if (node == null) return;

        if (node.val >= maxValue)
        {
            count++;
            maxValue = node.val;
        }

        TraverseAndUpdateCount(node.left, maxValue);
        TraverseAndUpdateCount(node.right, maxValue);
    }
}