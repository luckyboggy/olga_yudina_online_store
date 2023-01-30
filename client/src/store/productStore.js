import { makeAutoObservable } from "mobx";

export class ProductStore {
  constructor() {
    this._types = [];
    this._product = [];
    makeAutoObservable(this);
  }

  setType(types) {
    this._types = types;
  }

  setProduct(product) {
    this._product = product;
  }

  get types() {
    return this._types;
  }
  get product() {
    return this._product;
  }
}
