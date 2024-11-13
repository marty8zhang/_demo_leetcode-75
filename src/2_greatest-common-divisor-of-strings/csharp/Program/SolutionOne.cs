public class SolutionOne
{
    public static string GcdOfStrings(string str1, string str2)
    {
        var maxGcdLen = Math.Min(str1.Length, str2.Length);
        var gcd = "";
        var cd = str1[0].ToString();

        while (cd.Length < maxGcdLen)
        {
            if (str1.Replace(cd, "").Length == 0 && str2.Replace(cd, "").Length == 0) gcd = cd;
            cd = str1.Substring(0, cd.Length + 1);
        }

        if (str1.Replace(cd, "").Length == 0 && str2.Replace(cd, "").Length == 0) gcd = cd;

        return gcd;
    }
}