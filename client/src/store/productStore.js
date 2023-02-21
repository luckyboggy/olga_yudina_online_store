import { makeAutoObservable } from "mobx";

export class ProductStore {
  constructor() {
    this._types = [
      { id: 1, name: "Серьги" },
      { id: 2, name: "Кольца" },
      { id: 3, name: "Броши" },
      { id: 4, name: "Сумки" },
    ];
    this._items = [
      { id: 1, name: "Серьги_1", price: 5000 },
      { id: 2, name: "Серьги_2", price: 5500 },
      { id: 3, name: "Серьги_3", price: 6000 },
      { id: 4, name: "Серьги_4", price: 6500 },
      { id: 5, name: "Кольцо_1", price: 7000 },
      { id: 6, name: "Кольцо_2", price: 8000 },
      { id: 7, name: "Кольцо_3", price: 9000 },
      { id: 8, name: "Кольцо_4", price: 9500 },
      { id: 9, name: "Брошь_1", price: 4000 },
      { id: 10, name: "Брошь_2", price: 4000 },
      { id: 11, name: "Брошь_3", price: 4500 },
      { id: 12, name: "Брошь_4", price: 4500 },
      { id: 13, name: "Сумка_1", price: 10000 },
      { id: 14, name: "Сумка_2", price: 15000 },
    ];
    this._selectedType = { name: "all" };
    makeAutoObservable(this);
  }

  setType(types) {
    this._types = types;
  }

  setProduct(items) {
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
