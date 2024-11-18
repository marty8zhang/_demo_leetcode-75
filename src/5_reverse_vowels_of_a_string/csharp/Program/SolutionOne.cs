public class SolutionOne
{
    public static string ReverseVowels(string s)
    {
        const string vowels = "aeiouAEIOU";
        var foundIndexes = new List<int>();
        var foundVowels = new Stack<Char>();

        for (int i = 0; i < s.Length; i++)
        {
            if (vowels.Contains(s[i]))
            {
                foundIndexes.Add(i);
                foundVowels.Push(s[i]);
            }
        }

        if (foundIndexes.Count <= 1) return s;

        return foundIndexes.Aggregate(
            s,
            (accumulator, i) => accumulator.Substring(0, i) + foundVowels.Pop() +
                                accumulator.Substring(i + 1)
        );
    }
}