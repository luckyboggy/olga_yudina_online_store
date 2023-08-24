import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "shared/assets/img/svg/search.svg";
import { ReactComponent as Auth } from "shared/assets/img/svg/person.svg";
import { ReactComponent as Basket } from "shared/assets/img/svg/basket.svg";
import { ReactComponent as Burger } from "shared/assets/img/svg/burger.svg";
import { Context } from "../../index.js";
import { observer } from "mobx-react-lite";

const Header = observer(({ setMobileMenu, setMobilSearch, mobilSearch }) => {
  const { user } = useContext(Context);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsHeaderVisible(
        prevScrollPosition > currentScrollPosition || currentScrollPosition < 10
      );
      setPrevScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <header className={isHeaderVisible ? "show" : "hide"}>
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
          <Search
            className="header__icons__item"
            onClick={() => setMobilSearch(!mobilSearch)}
          />
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
            <div className="basketIcon">
              <Basket className="header__icons__item" />

              {user.isAuth
                ? user.basketCount > 0 && (
                    <div className="basketCount_item">{user.basketCount}</div>
                  )
                : user.localBasket.length > 0 && (
                    <div className="basketCount_item">
                      {user.localBasket.length}
                    </div>
                  )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
});

export { Header };