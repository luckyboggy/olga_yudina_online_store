import React from "react";
import { Text } from "shared/ui/text/Text";
import { CustomCarousel } from "shared/ui/carousel2/CustomCaroousel.jsx";
import cls from "./MainPage.module.scss";

import mainImg01 from "shared/assets/img/png/main/Main01.png";
import mainImg02 from "shared/assets/img/png/main/Main02.png";
import mainImg03 from "shared/assets/img/png/main/Main03.png";
import mainImg04 from "shared/assets/img/png/main/Main04.png";
import mainImg05 from "shared/assets/img/png/main/Main05.png";
import mainImg06 from "shared/assets/img/png/main/Main06.png";
import mainImg07 from "shared/assets/img/png/main/Main07.png";
import mainImg08 from "shared/assets/img/png/main/Main08.png";

import slide01 from "shared/assets/img/png/main/slide01.png";
import slide02 from "shared/assets/img/png/main/slide02.png";
import slide03 from "shared/assets/img/png/main/slide03.png";
import slide04 from "shared/assets/img/png/main/slide04.png";
import { Slider } from "shared/ui/slider/Slider";

const MainPage = () => {
  return (
    <div className={cls.mainPage}>
      <div className={cls.startImg}>
        <img src={mainImg01} alt="main" />

        <Text size={"m"} position={"center"} padding={"pv2"} ff={"font_test"}>
          <span className={cls.logo}>OLGA YUDINA</span> - женственность,
          воплощенная в украшениях из <br />
          премиальных материалов <br /> с нотками винтажного шика
        </Text>
        <Text size={"s"} position={"center"} padding={"pv2"}>
          Украшения бренда - это размышление мастера на тему изысканности
          повседневного образа. Аксессуары создают настроение сиять, стать
          чувственной героиней любимого романа и привнести в обычный день
          ощущение праздника.
        </Text>
        {/* <img src={mainImg03} alt="main" /> */}
        <Slider images={[slide01, slide02, slide03, slide04]} />
        {/* <CustomCarousel
          images={[mainImg04, mainImg05, mainImg06, mainImg07, mainImg08]}
        /> */}
        {/* <img src={mainImg04} alt="main" />
        <img src={mainImg05} alt="main" />
        <img src={mainImg06} alt="main" />
        <img src={mainImg07} alt="main" />
        <img src={mainImg08} alt="main" /> */}
      </div>
    </div>
  );
};

export { MainPage };
