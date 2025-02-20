public class SolutionOne
{
    public static int MinFlips(int a, int b, int c)
    {
        var count = 0;
        var sa = Convert.ToString(a, 2);
        var sb = Convert.ToString(b, 2);
        var sc = Convert.ToString(c, 2);

        var maxLen = Math.Max(Math.Max(sa.Length, sb.Length), sc.Length);
        for (var i = 1; i <= maxLen; i++)
        {
            var va = i > sa.Length ? '0' : sa[^i];
            var vb = i > sb.Length ? '0' : sb[^i];
            var vc = i > sc.Length ? '0' : sc[^i];

            if (vc == '0')
            {
                if (va == '1') count++;
                if (vb == '1') count++;
            }
            else if (va == '0' && vb == '0') count++;
        }

        return count;
    }
}