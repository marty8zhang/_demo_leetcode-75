public class SolutionThree
{
    public static string PredictPartyVictory(string senate)
    {
        var senators = new Queue<char>(senate);
        var uncastVotes = new Queue<char>();

        while (senators.Contains('R') && senators.Contains('D'))
        {
            var s = senators.Dequeue();
            if (uncastVotes.Count == 0 || uncastVotes.Peek() == s)
            {
                senators.Enqueue(s);
                uncastVotes.Enqueue(s);
            }
            else
            {
                uncastVotes.Dequeue();
            }
        }

        return senators.Contains('R') ? "Radiant" : "Dire";
    }
}