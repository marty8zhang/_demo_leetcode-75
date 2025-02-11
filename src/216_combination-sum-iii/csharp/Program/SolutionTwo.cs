public class SolutionTwo
{
    public static IList<IList<int>> CombinationSum3(int k, int n)
    {
        var result = new List<IList<int>>();

        findCombination(1, [], 0);

        return result;

        void findCombination(int num, IList<int> comb, int sum)
        {
            if (sum > n || comb.Count > k) return;

            if (sum == n && comb.Count == k)
            {
                result.Add(new List<int>(comb));
                return;
            }

            for (var i = num; i <= 9; i++)
            {
                comb.Add(i);
                findCombination(i + 1, comb, sum + i);
                comb.RemoveAt(comb.Count - 1);
            }
        }
    }
}