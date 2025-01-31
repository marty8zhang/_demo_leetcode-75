/*
 * 1. Create a stack.
 * 2. Push non-`]` chars to the stack.
 * 3. When reaches a `]`, it means a full pattern has been captured, hence
 *    decoding can be started for the currently captured pattern.
 *    3.1 Pops the non-numeric chars out of the stack and form the substring to
 *        be repeated, until `[` has been reached.
 *    3.2 Pops the numeric chars and form the number of repeats.
 *    3.3 Push the decoded substring back to the stack.
 * 4. Convert the stack back to a string then return the result.
 */
export function decodeString(s) {
  let resultStack = [];

  for (let c of s) {
    if (c !== ']') {
      resultStack.push(c);
      continue;
    }

    let peek = resultStack[resultStack.length - 1];
    let substringToRepeat = '';
    while (peek !== '[') {
      substringToRepeat = `${resultStack.pop()}${substringToRepeat}`;
      peek = resultStack[resultStack.length - 1];
    }
    resultStack.pop();

    peek = resultStack[resultStack.length - 1];
    let times = '';
    while (!isNaN(peek)) {
      times = `${resultStack.pop()}${times}`;
      peek = resultStack[resultStack.length - 1];
    }

    const repeatedSubstring = substringToRepeat.repeat(Number(times));
    resultStack.push(repeatedSubstring);
  }

  return resultStack.join('');
}
