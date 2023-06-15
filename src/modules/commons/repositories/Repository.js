const { randomUUID } = require('node:crypto');

class Repository {
  _items = {};
  _model = '';

  initializeItemsModel() {
    if (this._model === '') return;

    this._items[this._model] = this._items[this._model] || [];
  }

  create(data) {
    this.initializeItemsModel();

    const date = new Date();

    const item = {
      _id: randomUUID(),
      ...data,
      created_at: date,
      updated_at: date,
    };

    this._items[this._model].push(item);

    return item;
  }

  findAll() {
    this.initializeItemsModel();

    return this._model
      ? this._items[this._model].filter(item => !item.deleted_at)
      : [];
  }

  findOne(id) {
    this.initializeItemsModel();

    return this._items[this._model].find(
      item => item._id === id && !item.deleted_at,
    );
  }

  update(id, data) {
    this.initializeItemsModel();

    const itemIndex = this._items[this._model].findIndex(
      item => item._id === id,
    );

    this._items[this._model][itemIndex] = {
      ...this._items[this._model][itemIndex],
      ...data,
      updated_at: new Date(),
    };

    return this._items[this._model][itemIndex];
  }

  delete(id) {
    this.initializeItemsModel();

    const itemIndex = this._items[this._model].findIndex(
      item => item._id === id,
    );

    this._items[this._model][itemIndex].deleted_at = new Date();
  }
}

module.exports = Repository;
