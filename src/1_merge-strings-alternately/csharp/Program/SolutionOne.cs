public class SolutionOne
{
    public static string MergeAlternately(string word1, string word2)
    {
        var result = string.Empty;
        var i = 0;

        while (word1.Length > i && word2.Length > i)
        {
            result = $"{result}{word1[i]}{word2[i]}";
            i++;
        }

        if (word1.Length > word2.Length)
        {
            result = $"{result}{word1.Substring(i)}";
        }
        else if (word1.Length < word2.Length)
        {
            result = $"{result}{word2.Substring(i)}";
        }

        return result;
    }
}