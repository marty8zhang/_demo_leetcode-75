using Utility;

public class SolutionTwo
{
    public static int MaxLevelSum(TreeNode root)
    {
        var maxSum = root.val;
        var maxSumLevel = 1;
        var currentLevel = 1;
        var queue = new Queue<TreeNode>();

        queue.Enqueue(root);

        while (queue.Count != 0)
        {
            var sum = 0;
            var numberOfNodesOnTheCurrentLevel = queue.Count;
            for (var i = 0; i < numberOfNodesOnTheCurrentLevel; i++)
            {
                var node = queue.Dequeue();
                sum += node.val;

                if (node.left != null) queue.Enqueue(node.left);
                if (node.right != null) queue.Enqueue(node.right);
            }

            if (sum > maxSum)
            {
                maxSum = sum;
                maxSumLevel = currentLevel;
            }

            currentLevel++;
        }

        return maxSumLevel;
    }
}