public class SolutionOne
{
    public static bool UniqueOccurrences(int[] arr)
    {
        var occurrences = new Dictionary<int, int>();
        foreach (var i in arr)
        {
            var occurrence = occurrences.GetValueOrDefault(i, 0);
            occurrences[i] = ++occurrence;
        }

        var reversedOccurrences = new Dictionary<int, int>();
        foreach (KeyValuePair<int, int> entry in occurrences)
        {
            if (reversedOccurrences.ContainsKey(entry.Value)) return false;

            reversedOccurrences.Add(entry.Value, entry.Key);
        }

        return true;
    }
}