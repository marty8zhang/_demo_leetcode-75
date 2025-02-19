export function longestCommonSubsequence(text1, text2) {
  const length1 = text1.length;
  const length2 = text2.length;
  const result = new Array(length1 + 1);
  for (let i = 0; i <= length1; i++) result[i] = new Array(length2 + 1).fill(0);

  for (let i = 1; i <= length1; i++)
    for (let j = 1; j <= length2; j++)
      result[i][j] =
        text1[i - 1] === text2[j - 1]
          ? result[i - 1][j - 1] + 1
          : Math.max(result[i - 1][j], result[i][j - 1]);

  return result[length1][length2];
}
