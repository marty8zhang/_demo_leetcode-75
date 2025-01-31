public class SolutionThree
{
    public static string RemoveStars(string s)
    {
        var result = new Stack<char>();
        var count = 0;

        for (var i = s.Length - 1; i >= 0; i--)
        {
            if (s[i] == '*') count++;
            else if (count > 0) count--;
            else result.Push(s[i]);
        }

        return String.Join("", result.ToArray());
    }
}