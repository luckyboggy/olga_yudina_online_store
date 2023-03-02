import { makeAutoObservable } from "mobx";

export class ProductStore {
  constructor() {
    this._types = [];
    this._items = [];
    this._selectedType = { name: "all" };
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setItems(items) {
    this._items = items;
  }

  setSelectedType(selectedType) {
    this._selectedType = selectedType;
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
}
