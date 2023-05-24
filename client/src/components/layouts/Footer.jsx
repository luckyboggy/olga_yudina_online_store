import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ToVk } from "../../img/svg/linkVk.svg";
import { ReactComponent as ToTg } from "../../img/svg/linkTg.svg";
import { ReactComponent as ToEmail } from "../../img/svg/linkEmail.svg";
import { ReactComponent as Arrow } from "../../img/svg/arrow.svg";

const Footer = () => {
  const [menuItems, setMenuItems] = useState(false);
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer__wrapper">
        <hr />
        <div className="footer__section">
          <div className="footer__info">
            <div
              className="footer__info_item"
              onClick={() => setMenuItems(!menuItems)}
            >
              <div className="footer__info_title">
                <div>покупателям</div>
                <Arrow className={`dropArrow ${menuItems ? "active" : ""}`} />
              </div>
              {menuItems && (
                <div className="footer__info_dropDown">
                  <Link
                    className="footer__info_ddItem"
                    to="delivery"
                    onClick={() => setMenuItems(false)}
                  >
                    delivery
                  </Link>
                  <Link
                    className="footer__info_ddItem"
                    to="about"
                    onClick={() => setMenuItems(false)}
                  >
                    about
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__section">
          <div className="footer__links">
            <Link to="#">
              <ToVk className="footer_link" />
            </Link>
            <Link to="#">
              <ToTg className="footer_link" />
            </Link>
            <Link to="#">
              <ToEmail className="footer_link" />
            </Link>
          </div>
        </div>
        <hr />
        <div className="footer__copyright">© {year} luckyboggy</div>
      </div>
    </footer>
  );
};

export { Footer };
