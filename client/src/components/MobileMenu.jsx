import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../img/svg/close.svg";
import { ReactComponent as Search } from "../img/svg/search.svg";
import { ReactComponent as Arrow } from "../img/svg/arrow.svg";
import { Context } from "../index.js";
import { observer } from "mobx-react-lite";

const MobileMenu = observer(({ mobileMenu, setMobileMenu }) => {
  const [collection, setCollection] = useState(false);
  const { product } = useContext(Context);

  return (
    <div className={mobileMenu ? "mobileMenu activeMenu" : "mobileMenu"}>
      <div className="mobileMenu__header">
        <Close
          className="mobileMenu__close"
          onClick={() => setMobileMenu(false)}
        />
        <Search className="mobileMenu__search" />
      </div>
      <hr />
      <div className="mobileMenu__content">
        <div
          className="mobileMenu__item"
          onClick={() => setCollection(!collection)}
        >
          <div className="mobileMenu__item_title">
            <div>collection</div>
            <Arrow className={`dropArrow ${collection ? "active" : ""}`} />
          </div>
          {collection && (
            <div className="mobileMenu__dropDown">
              <Link
                className="mobileMenu__ddItem"
                to="shop"
                onClick={() => {
                  product.setSelectedType({ name: "all" });
                  setMobileMenu(false);
                }}
              >
                watch all
              </Link>
              {product.types.map((type) => (
                <Link
                  key={type.name}
                  className="mobileMenu__ddItem"
                  to="shop"
                  onClick={() => {
                    product.setSelectedType(type);
                    setMobileMenu(false);
                  }}
                >
                  {type.name.toLowerCase()}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="mobileMenu__item">
          <Link
            className="mobileMenu__item_title"
            to="about"
            onClick={() => setMobileMenu(false)}
          >
            favorites
          </Link>
        </div>
        <div className="mobileMenu__item">
          <Link
            className="mobileMenu__item_title"
            to="about"
            onClick={() => setMobileMenu(false)}
          >
            workshops
          </Link>
        </div>
        <div className="mobileMenu__item">
          <Link
            className="mobileMenu__item_title"
            to="about"
            onClick={() => setMobileMenu(false)}
          >
            about
          </Link>
        </div>
        <div className="mobileMenu__item">
          <Link
            className="mobileMenu__item_title"
            to="delivery"
            onClick={() => setMobileMenu(false)}
          >
            delivery
          </Link>
        </div>
      </div>
      <div className="mobileMenu__nav"></div>
    </div>
  );
});

export { MobileMenu };
