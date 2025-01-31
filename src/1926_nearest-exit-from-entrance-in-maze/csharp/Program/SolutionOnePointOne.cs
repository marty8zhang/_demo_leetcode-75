public class SolutionOnePointOne
{
    public static int NearestExit(char[][] maze, int[] entrance)
    {
        var count = 0;

        maze[entrance[0]][entrance[1]] = '-';

        var queue = new Queue<int[]>([entrance]);
        while (queue.Count > 0)
        {
            var numberOfCells = queue.Count;
            for (var i = 0; i < numberOfCells; i++)
            {
                var cell = queue.Dequeue();
                var row = cell[0];
                var col = cell[1];

                if (count > 0 &&
                    (row == 0 || row == maze.Length - 1 || col == 0 ||
                     col == maze[0].Length - 1))
                    return count;

                if (row - 1 >= 0 && maze[row - 1][col] == '.')
                {
                    queue.Enqueue([row - 1, col]);
                    maze[row - 1][col] = '-';
                }

                if (col + 1 < maze[0].Length && maze[row][col + 1] == '.')
                {
                    queue.Enqueue([row, col + 1]);
                    maze[row][col + 1] = '-';
                }

                if (row + 1 < maze.Length && maze[row + 1][col] == '.')
                {
                    queue.Enqueue([row + 1, col]);
                    maze[row + 1][col] = '-';
                }

                if (col - 1 >= 0 && maze[row][col - 1] == '.')
                {
                    queue.Enqueue([row, col - 1]);
                    maze[row][col - 1] = '-';
                }
            }

            count++;
        }

        return -1;
    }
}