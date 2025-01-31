public class SolutionOne
{
    public static bool CanVisitAllRooms(IList<IList<int>> rooms)
    {
        var keys = new HashSet<int>([0]);
        var unusedKeys = new List<int>(rooms[0]);

        for (var i = 0; i < unusedKeys.Count; i++)
        {
            var key = unusedKeys[i];
            if (!keys.Add(key)) continue;

            if (keys.Count == rooms.Count) return true;

            unusedKeys.AddRange(rooms[key]);
        }

        return false;
    }
}