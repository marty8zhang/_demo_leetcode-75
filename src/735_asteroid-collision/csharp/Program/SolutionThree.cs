public class SolutionThree
{
    public static int[] AsteroidCollision(int[] asteroids)
    {
        var result = new Stack<int>();

        foreach (var a in asteroids)
        {
            if (a > 0)
            {
                result.Push(a);
                continue;
            }

            // left
            while (true)
            {
                if (result.Count == 0)
                {
                    result.Push(a);
                    break;
                }

                var prev = result.Peek();
                if (prev < 0)
                {
                    result.Push(a);
                    break;
                }

                // prev right
                if (-a < prev) break;
                result.Pop();
                if (-a == prev) break;
            }
        }

        var resultArray = result.ToArray();
        Array.Reverse(resultArray);

        return resultArray;
    }
}