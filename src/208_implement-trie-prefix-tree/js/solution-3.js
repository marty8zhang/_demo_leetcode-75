export function Trie() {
  this._keys = new Set();
  this._values = new Set();
}

Trie.prototype.insert = function (word) {
  this._values.add(word);

  let key = '';
  for (let c of word) {
    key += c;
    this._keys.add(key);
  }
};

Trie.prototype.search = function (word) {
  return this._values.has(word);
};

Trie.prototype.startsWith = function (prefix) {
  return this._keys.has(prefix);
};
