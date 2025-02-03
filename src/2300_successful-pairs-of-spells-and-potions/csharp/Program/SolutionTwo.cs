public class SolutionTwo
{
    public static int[] SuccessfulPairs(int[] spells, int[] potions,
        long success)
    {
        var result = new int[spells.Length];

        Array.Sort(potions);

        for (var i = 0; i < spells.Length; i++)
        {
            var min = Math.Ceiling(success / (decimal)spells[i]);
            var minJ = 0;
            var maxJ = potions.Length - 1;

            if (potions[minJ] >= min)
            {
                result[i] = potions.Length;
                continue;
            }

            if (potions[maxJ] < min)
            {
                result[i] = 0;
                continue;
            }

            int currentJ;
            while (true)
            {
                currentJ = (minJ + maxJ) / 2;
                if (potions[currentJ] < min && potions[currentJ + 1] >= min)
                {
                    currentJ++;
                    break;
                }

                if (potions[currentJ] < min) minJ = currentJ;
                else maxJ = currentJ;
            }

            result[i] = potions.Length - currentJ;
        }

        return result;
    }
}