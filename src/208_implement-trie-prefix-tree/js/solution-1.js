export function Trie() {
  this.trie = new Map();
  this.trie.set('__', new Map());
}

Trie.prototype.insert = function (word) {
  if (word.length === 1) {
    const parent = this.trie.get('__');
    parent.set(word, word);
  }

  let parent = this.trie.get(word[0]);
  if (!parent) {
    parent = new Map();
    parent.set('__', new Map());
    this.trie.set(word[0], parent);
  }

  for (let i = 1; i < word.length; i++) {
    if (i === word.length - 1) {
      parent = parent.get('__');
      parent.set(word[i], word[i]);
      continue;
    }

    let newParent = parent.get(word[i]);
    if (!newParent) {
      newParent = new Map();
      newParent.set('__', new Map());
      parent.set(word[i], newParent);
    }

    parent = newParent;
  }
};

Trie.prototype.search = function (word) {
  let parent = this.trie;
  for (let i = 0; i < word.length; i++) {
    if (i === word.length - 1) return !!parent.get('__').get(word[i]);
    parent = parent.get(word[i]);
    if (!parent) return false;
  }
};

Trie.prototype.startsWith = function (prefix) {
  let parent = this.trie;
  for (let i = 0; i < prefix.length; i++) {
    if (i === prefix.length - 1)
      return !!(parent.get(prefix[i]) || parent.get('__').get(prefix[i]));
    parent = parent.get(prefix[i]);
    if (!parent) return false;
  }
};
