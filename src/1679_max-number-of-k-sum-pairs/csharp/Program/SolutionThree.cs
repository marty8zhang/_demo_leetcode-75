public class SolutionThree
{
    public static int MaxOperations(int[] nums, int k)
    {
        var counter = 0;
        var numCounts = new Dictionary<int, int>();

        foreach (var n in nums)
        {
            if (n >= k) continue;

            var valueNeeded = k - n;
            if (numCounts.TryGetValue(valueNeeded, out var valueNeededCount) &&
                valueNeededCount > 0)
            {
                counter++;
                numCounts[valueNeeded] = valueNeededCount - 1;
            }
            else
            {
                numCounts.TryGetValue(n, out var valueCount);
                numCounts[n] = valueCount + 1;
            }
        }

        return counter;
    }
}