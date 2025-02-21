/*
 * Note: This solution is more like a hybrid of solution 1 and 2 from the
 * JavaScript side. Because C# is strongly typed, arbitrary properties (as
 * implemented in the JavaScript version) cannot be easily implemented here.
 * Hence, a `Dictionary` property (similar to `Map` in JavaScript) is used here
 * instead. This also affects how the `isWordEnd` flag is implemented and is now
 * stored in the same dictionary instead.
 */

public class SolutionTwo
{
    public class Trie
    {
        private readonly Dictionary<char, Trie> _subTrie = new();

        public void Insert(string word)
        {
            /*
             * Comparing to the JS version, since `isWordEnd` is now in the
             * `Dictionary`, hence the `Trie` property can be accessed directly
             * here.
             */
            var current = _subTrie;

            foreach (var c in word)
            {
                if (!current.ContainsKey(c)) current.Add(c, new Trie());

                current = current[c]._subTrie;
            }

            current.TryAdd('.', new Trie());
        }

        public bool Search(string word)
        {
            var current = _subTrie;

            foreach (var c in word)
            {
                if (!current.ContainsKey(c)) return false;

                current = current[c]._subTrie;
            }

            return current.ContainsKey('.');
        }

        public bool StartsWith(string prefix)
        {
            var current = _subTrie;

            foreach (var c in prefix)
            {
                if (!current.ContainsKey(c)) return false;

                current = current[c]._subTrie;
            }

            return true;
        }
    }
}