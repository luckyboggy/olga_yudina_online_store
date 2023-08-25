import React from "react";
import { Link } from "react-router-dom";
import { CustomDropDown } from "shared/ui/dropDownMenu/CustomDropDown.jsx";
import { ReactComponent as ToVk } from "shared/assets/img/svg/linkVk.svg";
import { ReactComponent as ToTg } from "shared/assets/img/svg/linkTg.svg";
import { ReactComponent as ToEmail } from "shared/assets/img/svg/linkEmail.svg";
import cls from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={cls.footer}>
      <div className={cls.wrapper}>
        <hr />
        <div className={cls.section}>
          <CustomDropDown
            title={"покупателям"}
            content={[
              { name: "delivery", link: "delivery" },
              { name: "about", link: "about" },
            ]}
          />
        </div>
        <hr />
        <div className={cls.section}>
          <div className={cls.links}>
            <Link to="#">
              <ToVk className={cls.link} />
            </Link>
            <Link to="#">
              <ToTg className={cls.link} />
            </Link>
            <Link to="#">
              <ToEmail className={cls.link} />
            </Link>
          </div>
        </div>
        <hr />
        <div className={cls.copyright}>© {year} luckyboggy</div>
      </div>
    </footer>
  );
};

export { Footer };
