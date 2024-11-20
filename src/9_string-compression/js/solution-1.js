function compress(chars) {
  const l = chars.length;
  let counter = 1;

  for (let i = l - 2, preChar = chars[l - 1]; i >= 0; i--) {
    if (chars[i] === preChar) {
      counter++;
    } else {
      if (counter > 1) {
        chars.splice(i + 2, counter - 1);

        counter
          .toString()
          .split('')
          .reduce((_, char, index) => chars.splice(i + 2 + index, 0, char), []);

        counter = 1;
      }

      preChar = chars[i];
    }
  }

  if (counter > 1) {
    chars.splice(1, counter - 1);

    counter
      .toString()
      .split('')
      .reduce((_, char, index) => chars.splice(1 + index, 0, char), []);
  }

  return chars.length;
}

export default compress;
