import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../../img/svg/search.svg";
import { ReactComponent as Auth } from "../../img/svg/person.svg";
import { ReactComponent as Basket } from "../../img/svg/basket.svg";
import { ReactComponent as Burger } from "../../img/svg/burger.svg";

const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__burger">
          <Burger className="header__burger__icon" />
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
          <Auth className="header__icons__item" />
          <Basket className="header__icons__item" />
        </div>
      </div>
    </header>
  );
};

export { Header };
