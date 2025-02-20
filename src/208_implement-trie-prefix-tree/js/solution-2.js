export function Trie() {
  this.subTrie = {};
  this.isWordEnd = false;
}

Trie.prototype.insert = function (word) {
  let current = this;

  for (let c of word) {
    if (!current.subTrie[c]) current.subTrie[c] = new Trie();

    current = current.subTrie[c];
  }

  current.isWordEnd = true;
};

Trie.prototype.search = function (word) {
  let current = this;

  for (let c of word) {
    if (!current.subTrie[c]) return false;

    current = current.subTrie[c];
  }

  return current.isWordEnd;
};

Trie.prototype.startsWith = function (prefix) {
  let current = this;

  for (let c of prefix) {
    if (!current.subTrie[c]) return false;

    current = current.subTrie[c];
  }

  return true;
};
