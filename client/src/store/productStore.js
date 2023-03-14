import { makeAutoObservable } from "mobx";

export class ProductStore {
  constructor() {
    this._types = [];
    this._items = [];
    this._selectedType = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 8;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setItems(items) {
    this._items = items;
  }

  setSelectedType(selectedType) {
    this.setPage(1);
    this._selectedType = selectedType;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }

  setLimit(limit) {
    this._limit = limit;
  }

  get types() {
    return this._types;
  }
  get items() {
    return this._items;
  }
  get selectedType() {
    return this._selectedType;
  }
  get page() {
    return this._page;
  }
  get totalCount() {
    return this._totalCount;
  }
  get limit() {
    return this._limit;
   }
}
