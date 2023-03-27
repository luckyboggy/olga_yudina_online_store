import React, { useState, useEffect } from "react";
import classes from "./CustomCarousel.module.scss";
import { ReactComponent as Prev } from "../../../img/svg/prev.svg";
import { IsMobil } from "../../../hooks/IsMobil.js";

const CustomCarousel = ({ images, url }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobil = IsMobil();

  const plusIndex = (n) => {
    if (currentIndex + n < 0) {
      setCurrentIndex(images.length - 1);
    } else if (currentIndex + n > images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + n);
    }
  };

  return (
    <div className={classes.carousel}>
      <div className={classes.wrapper}>
        <div className={classes.constent}>
          <div
            className={classes.imagesLine}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image) => (
              <img
                src={url + image}
                key={image}
                className={classes.imageItem}
              />
            ))}
          </div>
        </div>
        {currentIndex > 0 && (
          <div className={classes.prev} onClick={() => plusIndex(-1)}>
            <Prev className={classes.prevArrow} />
          </div>
        )}
        {currentIndex < images.length - 1 && (
          <div className={classes.next} onClick={() => plusIndex(1)}>
            <Prev className={classes.nextArrow} />
          </div>
        )}
      </div>
      <div className={classes.dots}>
        {images.map((i, index) => (
          <div
            className={`${classes.dotItem} ${
              index === currentIndex ? classes.current : ""
            }`}
            key={i}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export { CustomCarousel };
