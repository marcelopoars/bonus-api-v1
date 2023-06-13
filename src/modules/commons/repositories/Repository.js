const { randomUUID } = require('node:crypto');

const _instance = Symbol();
const _singletonEnforcer = Symbol();

class Repository {
  static _items = {};
  static _model = null;

  constructor(enforce) {
    console.log('new instance');
    if (enforce !== _singletonEnforcer) {
      throw 'Cannot constructor singleton';
    }
  }

  static getInstance(model) {
    if (!this[_instance]) {
      this[_instance] = new Repository(_singletonEnforcer);
    }
    this._model = model;
    this._items[model] = this._items[model] || [];
    return this[_instance];
  }

  // setModel(model) {
  //   this._model = model;
  //   this._items[model] = this._items[model] || [];
  // }

  static create(data) {
    const item = {
      _id: randomUUID(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    console.log('items', this._items);
    console.log('model', this._model);

    this._items[this._model].push(item);
    return item;
  }

  findAll() {
    return this._items[this._model];
  }
}

module.exports = Repository;
