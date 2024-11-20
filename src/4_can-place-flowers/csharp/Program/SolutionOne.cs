public class SolutionOne
{
    public static bool CanPlaceFlowers(int[] flowerbed, int n)
    {
        var numberOfPlots = n;
        var i = 0;

        while (numberOfPlots > 0 && i < flowerbed.Length)
        {
            if (flowerbed[i] == 0
                && (i == 0 || flowerbed[i - 1] == 0)
                && (i + 1 == flowerbed.Length || flowerbed[i + 1] == 0))
            {
                numberOfPlots--;
                i += 2;
            }
            else
            {
                i++;
            }
        }

        return numberOfPlots == 0;
    }
}