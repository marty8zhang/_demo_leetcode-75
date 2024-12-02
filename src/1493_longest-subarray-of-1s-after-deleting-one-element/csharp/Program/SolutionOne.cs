public class SolutionOne
{
    public static int LongestSubarray(int[] nums)
    {
        var left = 0;
        var right = 0;
        var k = 1;

        while (right < nums.Length)
        {
            if (nums[right] == 0) k--;

            if (k < 0)
            {
                if (nums[left] == 0) k++;

                left++;
            }

            right++;
        }

        return right - left - 1;
    }
}