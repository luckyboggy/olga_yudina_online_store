import React from "react";
import { ReactComponent as Close } from "../img/svg/close.svg";

const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div className={mobileMenu ? "mobileMenu activeMenu" : "mobileMenu"}>
      <div className="mobileMenu__header">
        <Close
          className="mobileMenu__close"
          onClick={() => setMobileMenu(false)}
        />
      </div>
      <div className="mobileMenu__nav"></div>
    </div>
  );
};

export { MobileMenu };
