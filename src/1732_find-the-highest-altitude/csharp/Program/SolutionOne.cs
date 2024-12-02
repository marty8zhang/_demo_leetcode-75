public class SolutionOne
{
    public static int LargestAltitude(int[] gain)
    {
        var largetst = 0;

        gain.Aggregate(0, (acc, g) =>
        {
            acc += g;

            if (acc > largetst) largetst = acc;

            return acc;
        });

        return largetst;
    }
}