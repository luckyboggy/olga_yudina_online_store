import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../../img/svg/search.svg";
import { ReactComponent as Auth } from "../../img/svg/person.svg";
import { ReactComponent as Basket } from "../../img/svg/basket.svg";
import { ReactComponent as Burger } from "../../img/svg/burger.svg";
import { Context } from "../../index.js";
import { observer } from "mobx-react-lite";

const Header = observer(({ setMobileMenu }) => {
  const { user } = useContext(Context);

  return (
    <header>
      <div className="header__wrapper">
        <div className="header__burger">
          <Burger
            className="header__burger__icon"
            onClick={() => setMobileMenu(true)}
          />
        </div>
        <div className="header__navi"></div>
        <div className="header__logo">
          <Link to="">OLGA YUDINA</Link>
        </div>
        <div className="header__navi">
          <Link to="shop">collection</Link>
          <Link to="about">about</Link>
          <Link to="delivery">delivery</Link>
        </div>
        <div className="header__icons">
          <Search className="header__icons__item" />
          {user.isAuth && user.user.role === "ADMIN" && (
            <Link to="admin">
              <Auth className="header__icons__item" />
            </Link>
          )}
          {user.isAuth && user.user.role === "USER" && (
            <Link to="user">
              <Auth className="header__icons__item" />
            </Link>
          )}

          {!user.isAuth && (
            <Link to="login">
              <Auth className="header__icons__item" />
            </Link>
          )}

          <Link to="basket">
            <Basket className="header__icons__item" />
          </Link>
        </div>
      </div>
    </header>
  );
});

export { Header };
