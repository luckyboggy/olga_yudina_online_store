import React from "react";
import { Text } from "shared/ui/text/Text";
import { CustomCarousel } from "shared/ui/carousel2/CustomCaroousel.jsx";
import cls from "./MainPage.module.scss";

import mainImg01 from "shared/assets/img/png/main/Main01.png";

import slide01 from "shared/assets/img/png/main/slider/slide01.png";
import slide02 from "shared/assets/img/png/main/slider/slide02.png";
import slide03 from "shared/assets/img/png/main/slider/slide03.png";
import slide04 from "shared/assets/img/png/main/slider/slide04.png";
import slide05 from "shared/assets/img/png/main/slider/slide05.png";
import slide06 from "shared/assets/img/png/main/slider/slide06.png";
import slide07 from "shared/assets/img/png/main/slider/slide07.png";


import { Slider } from "shared/ui/slider/Slider";

const MainPage = () => {
  const sliderImages = [
    { img: slide02, title: "Кольца", description: "description02" },
    { img: slide01, title: "Сумки", description: "description01" },
    { img: slide03, title: "Колье", description: "description03" },
    { img: slide07, title: "Броши", description: "description04" },
    { img: slide05, title: "Одежда", description: "description04" },
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
        <Slider images={sliderImages} isDescription={false} />
      </div>
    </div>
  );
};

export { MainPage };
