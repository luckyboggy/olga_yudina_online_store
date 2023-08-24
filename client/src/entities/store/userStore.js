import { makeAutoObservable } from "mobx";

export class UserStore {
  constructor() {
    this._isAuth = false;
    this._user = { role: "ADMIN" };
    //this._user ={role: "USER"};
    this._basketId = 0;
    this._basketCount = 0;
    this._basketItems = [];
    this._favoriteId = 0;
    this._favoritesItems = [];
    //local basket
    this._localBasket = [];
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  setUser(user) {
    this._user = user;
  }

  setBasketId(basketId) {
    this._basketId = basketId;
  }
  setBasketCount(basketCount) {
    this._basketCount = basketCount;
  }
  setBasketItems(basketItems) {
    this._basketItems = basketItems;
  }
  setFavoriteId(favoriteId) {
    this._favoriteId = favoriteId;
  }
  setFavoritesItems(favoritesItems) {
    this._favoritesItems = favoritesItems;
  }

  // local basket
  addToLocalBasket(productId) {
    if (!this._localBasket.find((item) => item.productId === productId)) {
      this._localBasket.push({ productId: productId });
    }
  }
  parseLocalBasket(localBasket) {
    this._localBasket = localBasket;
  }
  removeFromLocalBasket(id) {
    this._localBasket = this._localBasket.filter(
      (item) => item.productId !== id
    );
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  get basketId() {
    return this._basketId;
  }
  get basketCount() {
    return this._basketCount;
  }
  get basketItems() {
    return this._basketItems;
  }
  get favoriteId() {
    return this._favoriteId;
  }
  get favoritesItems() {
    return this._favoritesItems;
  }
  get localBasket() {
    return this._localBasket;
  }
}
