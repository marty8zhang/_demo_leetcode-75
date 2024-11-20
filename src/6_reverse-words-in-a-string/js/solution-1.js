function reverseWords(s) {
  return s.trim().replaceAll(/\s+/g, ' ').split(' ').reverse().join(' ');
}

export default reverseWords;
