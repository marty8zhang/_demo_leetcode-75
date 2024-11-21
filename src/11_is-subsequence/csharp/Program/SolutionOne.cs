public class SolutionOne
{
    public static bool IsSubsequence(string s, string t)
    {
        if (s.Length == 0 || s == t) return true;

        for (int i = 0, j = 0; i < t.Length; i++)
        {
            if (t[i] == s[j]) j++;

            if (j == s.Length) return true;
        }

        return false;
    }
}