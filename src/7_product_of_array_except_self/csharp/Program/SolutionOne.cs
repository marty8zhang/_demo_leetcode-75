public class SolutionOne
{
    public static int[] ProductExceptSelf(int[] nums)
    {
        int[] products = Enumerable.Repeat(1, nums.Length).ToArray();
        int[] preProducts = Enumerable.Repeat(1, nums.Length).ToArray();
        int[] sufProducts = Enumerable.Repeat(1, nums.Length).ToArray();

        preProducts[0] = 1;
        for (int i = 1; i < nums.Length; i++)
        {
            preProducts[i] = preProducts[i - 1] * nums[i - 1];
        }

        sufProducts[nums.Length - 1] = 1;
        for (int i = nums.Length - 2; i >= 0; i--)
        {
            sufProducts[i] = sufProducts[i + 1] * nums[i + 1];
            products[i] = preProducts[i] * sufProducts[i];
        }

        products[nums.Length - 1] = preProducts[nums.Length - 1];

        return products;
    }
}