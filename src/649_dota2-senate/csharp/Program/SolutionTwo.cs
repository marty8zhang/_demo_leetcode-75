public class SolutionTwo
{
    public static string PredictPartyVictory(string senate)
    {
        var uncastVotes = new Queue<char>();
        var currentRound = new Queue<char>(senate);

        while (currentRound.Contains('R') && currentRound.Contains('D'))
        {
            var nextRound = new Queue<char>();

            foreach (var s in currentRound)
            {
                if (uncastVotes.Count == 0 || uncastVotes.Peek() == s)
                {
                    nextRound.Enqueue(s);
                    uncastVotes.Enqueue(s);
                }
                else
                {
                    uncastVotes.Dequeue();
                }
            }

            currentRound = nextRound;
        }

        return currentRound.Contains('R') ? "Radiant" : "Dire";
    }
}