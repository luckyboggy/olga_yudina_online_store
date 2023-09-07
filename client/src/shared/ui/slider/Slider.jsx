import React from "react";
import cls from "./Slider.module.scss";

const Slider = ({ images, isDescription }) => {
  return (
    <div className={cls.slider}>
      <div className={cls.wrapper}>
        <div className={cls.list}>
          {images.map((image) => (
            <div className={cls.item} key={image.title}>
              <img src={image.img} alt={image.name} className={cls.image} />
              <div className={cls.content}>
                <div className={cls.title}>{image.title}</div>
                {isDescription && (
                  <div className={cls.description}>{image.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Slider };
