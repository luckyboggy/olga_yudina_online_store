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
  const sliderImages = [
    { img: slide01, title: "title01", description: "description01" },
    { img: slide02, title: "title02", description: "description02" },
    { img: slide03, title: "title03", description: "description03" },
    { img: slide04, title: "title04", description: "description04" },
  ];

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
        <Slider images={sliderImages} />
      </div>
    </div>
  );
};

export { MainPage };
