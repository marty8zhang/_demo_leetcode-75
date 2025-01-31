using Utility;

public class SolutionOne
{
    public static int MaxDepth(TreeNode? root)
    {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return 1;

        return 1 + Math.Max(MaxDepth(root.left), MaxDepth(root.right));
    }
}