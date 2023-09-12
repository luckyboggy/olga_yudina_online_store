import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchOneProduct } from "http/productAPI";
import { CustomCarousel } from "shared/ui/carousel2/CustomCaroousel.jsx";
import { Text } from "shared/ui/text/Text";
import {
  handleAddToBasket,
  isInBasket,
} from "shared/lib/functions/basketFunctions.js";
import {
  isInFavorites,
  toggleFavorite,
} from "shared/lib/functions/favoritesFunctions.js";
import { ReactComponent as Basket } from "shared/assets/img/svg/basket.svg";
import { ReactComponent as Like } from "shared/assets/img/svg/like.svg";
import { observer } from "mobx-react-lite";
import { BASKET_ROUTE } from "app/utils/consts";
import cls from "./Product.module.scss";

const Product = observer(() => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [selectedSize, setSelectedSize] = useState("unified");
  const inBasket = isInBasket(item.id);
  const favorite = isInFavorites(item.id);

  const toggleSize = (newSize) => {
    if (newSize.size === selectedSize) {
      setSelectedSize("");
    } else {
      if (newSize.quantity > 0) {
        setSelectedSize(newSize.size);
      }
    }
  };

  useEffect(() => {
    fetchOneProduct(id).then((data) => setItem(data));
  }, []);

  return (
    <div className={cls.product}>
      {/* изображения */}
      {item.img && (
        <CustomCarousel url={process.env.REACT_APP_API_URL} images={item.img} />
      )}

      {/* описание */}
      <div className={cls.content}>
        <div className={cls.title}>{item.name}</div>
        <div className={cls.price}>
          {item.price && item.price.toLocaleString()} р
        </div>
        <div className={cls.description}>{item.description}</div>
        <div className={cls.materials}></div>

        {/* Размеры */}
        {item.productSize && !(item.productSize[0].size === "unified") && (
          <div className={cls.sizes}>
            <Text size={"s"} position={"left"}>
              Размеры
            </Text>
            <div className={cls.selectSize}>
              {item.productSize.sort((a, b) => a.size - b.size).map((size) => (
                <div
                  key={size.size}
                  className={`${cls.sizeItem} ${
                    size.size === selectedSize ? cls.selectesSize : ""
                  } ${size.quantity > 0 ? "" : cls.notAvailable}`}
                  onClick={() => toggleSize(size)}
                >
                  {size.size}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* кнопки */}
      <div className={cls.btns}>
        {inBasket ? (
          <button
            className={`${cls.btn} ${cls.ordered}`}
            onClick={() => navigate("../" + BASKET_ROUTE)}
          >
            оформить
          </button>
        ) : (
          <button
            className={cls.btn}
            onClick={() => handleAddToBasket(item.id, selectedSize)}
          >
            <Basket className={cls.icon} />
          </button>
        )}
        <div
          className={cls.like}
          onClick={(event) => {
            toggleFavorite(event, item.id, favorite);
          }}
        >
          <Like className={`${cls.prodictLike} ${favorite ? cls.liked : ""}`} />
        </div>
      </div>
    </div>
  );
});

export { Product };
