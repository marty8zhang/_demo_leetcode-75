public class SolutionTwo
{
    public static int LongestOnes(int[] nums, int k)
    {
        var left = 0;
        var right = 0;

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

        return right - left;
    }
}