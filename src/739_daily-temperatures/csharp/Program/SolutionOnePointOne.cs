public class SolutionOnePointOne
{
    public static int[] DailyTemperatures(int[] temperatures)
    {
        var result = new int[temperatures.Length];
        Array.Fill(result, 0);

        var descTemps = new Stack<int>();
        for (var i = temperatures.Length - 1; i >= 0; i--)
        {
            while (descTemps.Count > 0 &&
                   temperatures[descTemps.Peek()] <= temperatures[i])
                descTemps.Pop();

            if (descTemps.Count > 0) result[i] = descTemps.Peek() - i;

            descTemps.Push(i);
        }

        return result;
    }
}