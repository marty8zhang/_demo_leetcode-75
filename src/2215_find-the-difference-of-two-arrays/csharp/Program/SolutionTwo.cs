public class SolutionTwo
{
    public static IList<IList<int>> FindDifference(int[] nums1, int[] nums2)
    {
        var set1 = new HashSet<int>(nums1);
        var set2 = new HashSet<int>(nums2);

        /* Method 1 - Should be faster than Method 2, but less readable. */
        foreach (var n in set1)
        {
            if (set2.Contains(n))
            {
                set1.Remove(n);
                set2.Remove(n);
            }
        }
        /* Method 2 */
        // set1.ExceptWith(nums2);
        // set2.ExceptWith(nums1);

        return new List<IList<int>>
        {
            set1.ToList(),
            set2.ToList()
        };
    }
}