import React, { useState } from "react";
import classes from "./CustomCarousel.module.scss";

const CustomCarousel = ({ images, url }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const plusIndex = (n) => {
    if (currentImg + n < 0) {
      setCurrentImg(images.length - 1);
    } else if (currentImg + n > images.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + n);
    }
  };

  const setCurrentIndex = () => {};

  return (
    <div className={classes.carouselWrapper}>
      <div className={classes.carouselLine}>
        <img src={url + images[currentImg]} />
        <div
          className={`${classes.btns} ${classes.prev}`}
          onClick={() => plusIndex(-1)}
        >
          л
        </div>
        <div
          className={`${classes.btns} ${classes.next}`}
          onClick={() => plusIndex(1)}
        >
          р
        </div>
      </div>

      <div className={classes.dots}>
        {images.map((i, index) => (
          <div
            className={`${classes.dotItem} ${
              index === currentImg ? classes.current : ""
            }`}
            key={i}
            onClick={() => setCurrentImg(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export { CustomCarousel };
