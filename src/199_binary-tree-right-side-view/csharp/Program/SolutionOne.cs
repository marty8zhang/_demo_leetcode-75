using Utility;

public class SolutionOne
{
    private IList<int> list = new List<int>();

    public IList<int> RightSideView(TreeNode? root)
    {
        TraverseAndNote(root, 0);

        return list;
    }

    private void TraverseAndNote(TreeNode? node, int depth)
    {
        if (node == null) return;

        if (list.Count < depth + 1) list.Add(node.val);

        depth++;
        TraverseAndNote(node.right, depth);
        TraverseAndNote(node.left, depth);
    }
}