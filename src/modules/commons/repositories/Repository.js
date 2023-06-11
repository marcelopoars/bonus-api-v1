const { randomUUID } = require('node:crypto');

class Repository {
  _items = [];

  constructor({ items }) {
    this._items = items;
  }

  create(data) {
    const item = { _id: randomUUID(), ...data };
    this._items.push(item);
    return item;
  }
}

module.exports = Repository;
