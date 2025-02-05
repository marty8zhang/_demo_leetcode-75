public class SolutionTwo
{
    public static IList<string> LetterCombinations(string digits)
    {
        var result = new List<string>();
        if (digits.Length == 0) return result;

        string[] letters =
            ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
        foreach (var l in letters[digits[0] - '0']) result.Add(l.ToString());

        for (var i = 1; i < digits.Length; i++)
        {
            var candidates = letters[digits[i] - '0'];
            var prevResult = new List<string>(result);
            result = new List<string>();
            foreach (var cand in candidates)
            {
                foreach (var pr in prevResult)
                {
                    result.Add($"{pr}{cand}");
                }
            }
        }

        return result;
    }
}