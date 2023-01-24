import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Search } from "../img/svg/search.svg";
import { ReactComponent as Auth } from "../img/svg/person.svg";
import { ReactComponent as Basket } from "../img/svg/basket.svg";
import { ReactComponent as Burger } from "../img/svg/burger.svg";

const Layout = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <header>
        <div className="header__wrapper">
          <div className="header__burger">
            <Burger className="header__burger__icon" width="40" height="40" />
          </div>
          <div className="header__logo">
            <Link to="">OLGA YUDINA</Link>
          </div>
          <div className="header__navi">
            <Link to="shop">collection</Link>
            <Link to="about">about</Link>
            <Link to="delivery">delivery</Link>
          </div>
          <div className="header__icons">
            <a href="/#">
              <Search className="header__icons__item" />
            </a>
            <a href="/#">
              <Auth className="header__icons__item" />
            </a>
            <a href="/#">
              <Basket className="header__icons__item" />
            </a>
          </div>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <div className="footer__wrapper">
          <div className="footer__copyright">© {year} luckyboggy</div>
        </div>
      </footer>
    </div>
  );
};

export { Layout };
