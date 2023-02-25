import {makeAutoObservable} from 'mobx';

export class UserStore {
    constructor() {
        this._isAuth = true;
        this._user ={role: "ADMIN"};
        //this._user ={role: "USER"};
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
}