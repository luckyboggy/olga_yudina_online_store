import React, { useState } from "react";
import cls from "./Slider.module.scss";

const Slider = ({ images }) => {
  return (
    <div className={cls.slider}>
      <div className={cls.wrapper}>
        <div className={cls.list}>
          {images.map((image) => (
            <div className={cls.item} key={image.name}>
              <div className={cls.content}>
                <div className={cls.title}>{image.title}</div>
                <div className={cls.description}>{image.description}</div>
              </div>
              <img src={image.img} alt={image.name} className={cls.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Slider };
