public class SolutionOne
{
    public static int EqualPairs(int[][] grid)
    {
        var l = grid.Length;
        var columns = new Dictionary<string, int>();

        for (var i = 0; i < l; i++)
        {
            var col = "";

            for (var j = 0; j < l; j++) col = $"{col},{grid[j][i]}";

            col = col.Substring(1);
            columns[col] = columns.GetValueOrDefault(col, 0) + 1;
        }

        var count = 0;

        foreach (var row in grid) count += columns.GetValueOrDefault(String.Join(',', row), 0);

        return count;
    }
}