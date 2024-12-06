public class SolutionTwo
{
    public static IList<IList<int>> FindDifference(int[] nums1, int[] nums2)
    {
        var set1 = new HashSet<int>(nums1);
        var set2 = new HashSet<int>(nums2);

        foreach (var n in set1)
        {
            if (set2.Contains(n))
            {
                set1.Remove(n);
                set2.Remove(n);
            }
        }

        var result = new List<IList<int>>
        {
            set1.ToList(),
            set2.ToList()
        };

        return result;
    }
}