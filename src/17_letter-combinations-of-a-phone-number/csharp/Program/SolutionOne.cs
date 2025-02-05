public class SolutionOne
{
    public static IList<string> LetterCombinations(string digits)
    {
        var result = new List<string>();
        if (digits.Length == 0) return result;

        string[] letters =
            ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
        foreach (var l in letters[digits[0] - '0']) result.Add(l.ToString());

        var prevLen = 1;
        for (var i = 1; i < digits.Length; i++)
        {
            var candidates = letters[digits[i] - '0'];
            var len = result.Count;
            prevLen *= letters[digits[i - 1] - '0'].Length;
            foreach (var cand in candidates)
            {
                for (var j = len - prevLen; j < len; j++)
                {
                    result.Add(result[j] + cand);
                }
            }
        }

        result.RemoveRange(0,
            result.Count -
            prevLen * letters[digits[digits.Length - 1] - '0'].Length);

        return result;
    }
}