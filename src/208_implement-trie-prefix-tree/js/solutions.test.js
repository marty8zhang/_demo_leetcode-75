// import { Trie } from './solution-1.js';
// import { Trie } from './solution-2.js';
import { Trie } from './solution-3.js';

describe('`Trie()`', () => {
  it('should work as expected', () => {
    const trie = new Trie();

    trie.insert('apple');

    expect(trie.search('apple')).toBeTruthy();
    expect(trie.startsWith('apple')).toBeTruthy();
    expect(trie.search('app')).toBeFalsy();
    expect(trie.startsWith('app')).toBeTruthy();

    trie.insert('app');

    expect(trie.search('app')).toBeTruthy();
  });
});
