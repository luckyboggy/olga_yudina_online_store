import React from "react";
import { Link } from "react-router-dom";
import { CustomDropDown } from "../UI/dropDownMenu/CustomDropDown.jsx";
import { ReactComponent as ToVk } from "../../img/svg/linkVk.svg";
import { ReactComponent as ToTg } from "../../img/svg/linkTg.svg";
import { ReactComponent as ToEmail } from "../../img/svg/linkEmail.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer__wrapper">
        <hr />
        <div className="footer__section">
          <CustomDropDown
            title={"покупателям"}
            content={[
              { name: "delivery", link: "delivery" },
              { name: "about", link: "about" },
            ]}
          />
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
