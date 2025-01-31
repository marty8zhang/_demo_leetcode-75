using Utility;

public class SolutionTwo
{
    public static TreeNode? DeleteNode(TreeNode? root, int key)
    {
        if (root == null) return null;

        if (root.val > key) root.left = DeleteNode(root.left, key);
        else if (root.val < key) root.right = DeleteNode(root.right, key);
        else
        {
            if (root.left == null && root.right == null) return null;
            if (root.left == null) return root.right;
            if (root.right == null) return root.left;

            root.val = GetMaxValue(root.left);
            root.left = DeleteNode(root.left, root.val);
        }

        return root;
    }

    private static int GetMaxValue(TreeNode root)
    {
        return root.right == null ? root.val : GetMaxValue(root.right);
    }
}