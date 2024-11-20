public class SolutionOne
{
    public static void MoveZeroes(int[] nums)
    {
        var counter = 0;

        for (int i = 0, j = 0; i < nums.Length; i++)
        {
            if (nums[i] == 0) counter++;
            else nums[j++] = nums[i];
        }

        if (counter > 0) Array.Fill(nums, 0, nums.Length - counter, counter);
    }
}