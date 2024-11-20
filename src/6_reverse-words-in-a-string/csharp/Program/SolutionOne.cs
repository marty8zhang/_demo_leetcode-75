using System.Text.RegularExpressions;

public class SolutionOne
{
    public static string ReverseWords(string s)
    {
        return String.Join(' ', Regex.Replace(s.Trim(), @"\s+", " ").Split(' ').Reverse());
    }
}