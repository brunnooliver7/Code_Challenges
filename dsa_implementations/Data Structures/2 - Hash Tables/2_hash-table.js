class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);

    // avoid collisions
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address];

    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
       if (currentBucket[i][0] === key) return currentBucket[i][1]
      }
    }

    return undefined;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000);
myHashTable.set("grapes", 10000);
const test1 = myHashTable.get("grapes");
console.log(test1);

myHashTable.set("apples", 9);
const test2 = myHashTable.get("apples");
console.log(test2);
