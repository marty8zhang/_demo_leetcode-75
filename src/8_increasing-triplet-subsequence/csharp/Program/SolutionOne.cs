public class SolutionOne
{
    public static bool IncreasingTriplet(int[] nums)
    {
        var l = nums.Length;
        var minsOnLeft = Enumerable.Repeat(nums[0], l).ToArray();
        var maxsOnRight = Enumerable.Repeat(nums[l - 1], l).ToArray();

        for (int i = 1, j = l - 2; i < l - 1 && j > 0; i++, j--)
        {
            if (i >= j)
            {
                if (nums[i] > minsOnLeft[i - 1] && nums[i] < maxsOnRight[i + 1]) return true;
                if (nums[j] > minsOnLeft[j - 1] && nums[j] < maxsOnRight[j + 1]) return true;
            }

            minsOnLeft[i] = minsOnLeft[i - 1] < nums[i] ? minsOnLeft[i - 1] : nums[i];
            maxsOnRight[j] = maxsOnRight[j + 1] > nums[j] ? maxsOnRight[j + 1] : nums[j];
        }

        return false;
    }
}