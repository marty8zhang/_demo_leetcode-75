function removeStars(s) {
  let result = [];
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '*') count++;
    else if (count) count--;
    else result.push(s[i]);
  }

  return result.reverse().join('');
}

export default removeStars;
