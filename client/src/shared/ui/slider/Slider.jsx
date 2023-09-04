import React, { useState } from "react";
import cls from "./Slider.module.scss";

const Slider = ({ images }) => {
  const [touchPosition, setTouchPosition] = useState(0);

  const handleTouchStart = (event) => {
    const touchDown = event.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (event) => {
    const touchDown = touchPosition;

    /* if (touchDown === null) {
      return;
    } */

    const currentTouch = event.touches[0].clientX;
    const difference = touchDown - currentTouch;

    console.log(difference);

    setTouchPosition(null);
  };

  return (
    <div className={cls.slider}>
      <div className={cls.wrapper}>
        <div
          className={cls.list}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {images.map((image) => (
            <img src={image} key={image} className={cls.item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Slider };
