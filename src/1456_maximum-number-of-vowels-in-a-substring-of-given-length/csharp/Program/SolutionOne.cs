public class SolutionOne
{
    public static int MaxVowels(string s, int k)
    {
        const string vowels = "aeiou";

        var maxCount = 0;
        for (var i = 0; i < k; i++)
        {
            if (vowels.Contains(s[i])) maxCount++;
        }

        var count = maxCount;
        for (var i = 1; i < s.Length - k + 1; i++)
        {
            if (vowels.Contains(s[i - 1])) count--;
            if (vowels.Contains(s[i + k - 1])) count++;

            if (count > maxCount) maxCount = count;
        }

        return maxCount;
    }
}