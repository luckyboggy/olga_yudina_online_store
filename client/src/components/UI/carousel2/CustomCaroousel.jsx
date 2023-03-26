import React from "react";
import classes from "./CustomCarousel.module.scss";

const CustomCarousel = ({ images, url }) => {
  return (
    <div className={classes.carousel}>
      <div className={classes.wrapper}>
        <div className={classes.prev}>&lt;</div>
        <div className={classes.constent}>
          <div className={classes.imagesLine}>
            {images.map((image) => (
              <img
                src={url + image}
                key={image}
                className={classes.imageItem}
              />
            ))}
          </div>
        </div>
        <div className={classes.next}>&gt;</div>
      </div>
    </div>
  );
};

export { CustomCarousel };
