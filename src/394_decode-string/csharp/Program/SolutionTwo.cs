using System.Text;

public class SolutionTwo
{
    public static string DecodeString(string s)
    {
        var resultStack = new Stack<string>();

        foreach (var c in s)
        {
            if (c != ']')
            {
                resultStack.Push(c.ToString());
                continue;
            }

            var peek = resultStack.Peek();
            var substringToRepeat = "";
            while (peek != "[")
            {
                substringToRepeat = $"{resultStack.Pop()}{substringToRepeat}";
                peek = resultStack.Peek();
            }

            resultStack.Pop();

            peek = resultStack.Peek();
            var times = "";
            while (int.TryParse(peek, out _))
            {
                times = $"{resultStack.Pop()}{times}";
                resultStack.TryPeek(out peek);
            }

            var t = int.Parse(times);
            resultStack.Push(
                new StringBuilder(substringToRepeat.Length * t)
                    .Insert(0, substringToRepeat, t).ToString()
            );
        }

        var resultArray = resultStack.ToArray();
        Array.Reverse(resultArray);

        return string.Join("", resultArray);
    }
}