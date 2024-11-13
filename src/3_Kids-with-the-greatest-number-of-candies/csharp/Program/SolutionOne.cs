public class SolutionOne
{
    public static IList<bool> KidsWithCandies(int[] candies, int extraCandies)
    {
        var maxNumber = candies.Max();

        return candies.Select((v) => v + extraCandies >= maxNumber).ToList();
    }
}