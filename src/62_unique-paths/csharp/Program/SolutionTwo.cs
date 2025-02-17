public class SolutionTwo
{
    public static int UniquePaths(int m, int n)
    {
        var result = new int[m][];
        var columns = new int[n];
        Array.Fill(columns, 1);
        Array.Fill(result, columns);

        for (var i = 1; i < m; i++)
        for (var j = 1; j < n; j++)
            result[i][j] = result[i][j - 1] + result[i - 1][j];

        return result[m - 1][n - 1];
    }

    public static int UniquePaths2DArray(int m, int n)
    {
        var result = new int[m, n];
        for (var i = 0; i < m; i++) result[i, 0] = 1;
        for (var j = 0; j < n; j++) result[0, j] = 1;

        for (var i = 1; i < m; i++)
        for (var j = 1; j < n; j++)
            result[i, j] = result[i, j - 1] + result[i - 1, j];

        return result[m - 1, n - 1];
    }
}