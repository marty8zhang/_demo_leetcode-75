export function minFlips(a, b, c) {
  let count = 0;
  a = a.toString(2);
  b = b.toString(2);
  c = c.toString(2);

  const maxLen = Math.max(a.length, b.length, c.length);

  for (let i = 1; i <= maxLen; ++i) {
    const va = a[a.length - i] ?? '0';
    const vb = b[b.length - i] ?? '0';
    const vc = c[c.length - i] ?? '0';

    if (vc === '0') {
      if (va === '1') count++;
      if (vb === '1') count++;
    } else if (va === '0' && vb === '0') count++;
  }

  return count;
}
