public class SolutionThree
{
    public static int Tribonacci(int n)
    {
        var tribNums = new int[n > 2 ? n + 1 : 3];
        tribNums[0] = 0;
        tribNums[1] = 1;
        tribNums[2] = 1;

        for (var i = 3; i <= n; i++)
        {
            tribNums[i] = tribNums[i - 1] + tribNums[i - 2] + tribNums[i - 3];
        }

        return tribNums[n];
    }
}