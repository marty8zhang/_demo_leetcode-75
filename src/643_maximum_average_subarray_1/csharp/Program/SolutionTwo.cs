public class SolutionTwo
{
    public static double FindMaxAverage(int[] nums, int k)
    {
        var maxSum = 0;
        for (var i = 0; i < k; i++)
        {
            maxSum += nums[i];
        }

        var sum = maxSum;
        for (var i = 1; i < nums.Length - k + 1; i++)
        {
            sum += nums[i + k - 1] - nums[i - 1];

            if (sum > maxSum) maxSum = sum;
        }

        return (double)maxSum / k;
    }
}