public class SolutionTwo
{
    private IList<IList<int>> _roomsToVisit = new List<IList<int>>();
    private bool[] _visited = [];

    public bool CanVisitAllRooms(IList<IList<int>> rooms)
    {
        _roomsToVisit = rooms;
        _visited = new bool[rooms.Count];

        Traverse(0);

        return _visited.All(v => v);
    }

    private void Traverse(int i)
    {
        if (_visited[i]) return;

        _visited[i] = true;

        foreach (var key in _roomsToVisit[i]) Traverse(key);
    }
}