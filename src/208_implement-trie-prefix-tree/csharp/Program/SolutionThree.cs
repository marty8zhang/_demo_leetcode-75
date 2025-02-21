/*
 * Despite the test results from LeetCode and the implementation details of C#,
 * intuitively, this solution should be the fastest in terms of `Search()` and
 * `StartsWith()`. On the other hand, its space consumption might be the largest
 * among all other solutions that break strings into character chains.
 */

public class SolutionThree
{
    public class Trie
    {
        private readonly HashSet<string> _keys = new();
        private readonly HashSet<string> _values = new();

        public void Insert(string word)
        {
            _values.Add(word);

            var key = "";
            foreach (var c in word)
            {
                key += c;
                _keys.Add(key);
            }
        }

        public bool Search(string word)
        {
            return _values.Contains(word);
        }

        public bool StartsWith(string prefix)
        {
            return _keys.Contains(prefix);
        }
    }
}