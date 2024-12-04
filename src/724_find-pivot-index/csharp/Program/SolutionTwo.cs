public class SolutionTwo
{
    public static int PivotIndex(int[] nums)
    {
        var l = nums.Length;

        var sum = 0;
        for (var i = 0; i < l; i++)
        {
            sum += nums[i];
        }

        var leftSum = 0;
        for (var i = 0; i < l; i++)
        {
            if (leftSum * 2 == sum - nums[i]) return i;

            leftSum += nums[i];
        }

        return -1;
    }
}