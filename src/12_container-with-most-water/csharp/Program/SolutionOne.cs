public class SolutionOne
{
    public static int MaxArea(int[] height)
    {
        var max = 0;
        var left = 0;
        var right = height.Length - 1;

        while (left < right)
        {
            var current = Math.Min(height[left], height[right]) * (right - left);

            max = current > max ? current : max;

            if (height[left] < height[right]) left++;
            else right--;
        }

        return max;
    }
}