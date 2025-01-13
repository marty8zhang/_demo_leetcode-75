public class SolutionTwo
{
    public class RecentCounter
    {
        private readonly Queue<int> _calls = new Queue<int>();

        public int Ping(int t)
        {
            this._calls.Enqueue(t);

            while (this._calls.Peek() < t - 3000) this._calls.Dequeue();

            return this._calls.Count;
        }
    }
}