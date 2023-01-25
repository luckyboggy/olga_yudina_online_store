import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../img/svg/close.svg";
import { ReactComponent as Search } from "../img/svg/search.svg";

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div className={mobileMenu ? "mobileMenu activeMenu" : "mobileMenu"}>
      <div className="mobileMenu__header">
        <Close
          className="mobileMenu__close"
          onClick={() => setMobileMenu(false)}
        />
        <Search className="mobileMenu__search"/>
      </div>
      <hr />
      <div className="mobileMenu__navi">
          <Link to="shop" onClick={() => setMobileMenu(false)}>collection</Link>
          <Link to="about" onClick={() => setMobileMenu(false)}>about</Link>
          <Link to="delivery" onClick={() => setMobileMenu(false)}>delivery</Link>
        </div>
      <div className="mobileMenu__nav"></div>
    </div>
  );
};

export { MobileMenu };
