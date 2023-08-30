import React from "react";
import cls from "./MainPage.module.scss";

import mainImg01 from "../../../shared/assets/img/png/main/Main01.png";
import mainImg02 from "../../../shared/assets/img/png/main/Main02.png";
import mainImg03 from "../../../shared/assets/img/png/main/Main03.png";
import mainImg04 from "../../../shared/assets/img/png/main/Main04.png";
import mainImg05 from "../../../shared/assets/img/png/main/Main05.png";
import mainImg06 from "../../../shared/assets/img/png/main/Main06.png";
import mainImg07 from "../../../shared/assets/img/png/main/Main07.png";
import mainImg08 from "../../../shared/assets/img/png/main/Main08.png";

const MainPage = () => {
  return (
    <div className={cls.mainPage}>
      <div className={cls.startImg}>
        <img src={mainImg01} alt="main" />
        <div>Ольга юдина это чтото высокое</div>
        {/* <img src={mainImg02} alt="main" /> */}
        <img src={mainImg03} alt="main" />
        <img src={mainImg04} alt="main" />
        <img src={mainImg05} alt="main" />
        <img src={mainImg06} alt="main" />
        <img src={mainImg07} alt="main" />
        <img src={mainImg08} alt="main" />
      </div>
    </div>
  );
};

export { MainPage };
