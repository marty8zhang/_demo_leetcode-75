public class SolutionOne
{
    public static bool CloseStrings(string word1, string word2)
    {
        if (word1.Length != word2.Length) return false;

        var word1Dict = new Dictionary<char, int>();
        var word2Dict = new Dictionary<char, int>();
        for (var i = 0; i < word1.Length; i++)
        {
            word1Dict[word1[i]] = word1Dict.GetValueOrDefault(word1[i], 0) + 1;
            word2Dict[word2[i]] = word2Dict.GetValueOrDefault(word2[i], 0) + 1;
        }

        if (word1Dict.Count != word2Dict.Count) return false;

        foreach (var entry in word1Dict)
        {
            if (!word2Dict.ContainsKey(entry.Key)) return false;
        }

        var occurrences1 = word1Dict.Values.ToArray();
        var occurrences2 = word2Dict.Values.ToArray();
        Array.Sort(occurrences1);
        Array.Sort(occurrences2);
        for (var i = 0; i < occurrences1.Length; i++)
        {
            if (occurrences1[i] != occurrences2[i]) return false;
        }

        return true;
    }
}