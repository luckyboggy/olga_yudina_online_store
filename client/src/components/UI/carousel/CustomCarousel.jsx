import React from "react";
import classes from "./CustomCarousel.module.scss";

const CustomCarousel = ({ images, url }) => {
  console.log(images);

  return (
    <div className={classes.carouselWrapper}>
      {/* <img src={url + images[0]} /> */}
      <div className={classes.btns}>
        <div>л</div>
        <div>р</div>
      </div>
      <div className={classes.dots}>точки</div>
    </div>
  );
};

export { CustomCarousel };
