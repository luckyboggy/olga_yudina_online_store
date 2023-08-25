import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { MobileMenu } from "widgets/MobileMenu";
import { Context } from "index.js";
import { observer } from "mobx-react-lite";
import { check } from "http/userAPI.js";
import { getBasket } from "http/basketAPI.js";
import { fetchBasketProduct } from "http/basketProductAPI.js";
import { getFavorites } from "http/favoritesAPI.js";
import { fetchFavoritesProduct } from "http/favoritesProductAPI.js";
import { Footer } from "widgets/layouts/Footer";
import { Header } from "widgets/layouts/Header";
import { MobilSearch } from "shared/ui/search/MobilSearch";
import { AppRouter } from "./providers/router";

const App = observer(() => {
  const { user } = useContext(Context);

  const [loading, setLoading] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobilSearch, setMobilSearch] = useState(false);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .then(() => {
        getBasket(user.user.id)
          .then((data) => {
            user.setBasketId(data.id);
          })
          .then(() => {
            fetchBasketProduct(user.basketId).then((data) => {
              user.setBasketCount(data.count);
              user.setBasketItems(data.rows);
            });
          });
      })
      .then(() => {
        getFavorites(user.user.id)
          .then((data) => {
            user.setFavoriteId(data.id);
          })
          .then(() => {
            fetchFavoritesProduct(user.favoriteId).then((data) => {
              user.setFavoritesItems(data.rows);
            });
          });
      })
      .catch(() => {
        if (localStorage.getItem("localBasket")) {
          user.parseLocalBasket(JSON.parse(localStorage.getItem("localBasket")));
        }

      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <Header
        setMobileMenu={setMobileMenu}
        setMobilSearch={setMobilSearch}
        mobilSearch={mobilSearch}
      />
      {mobilSearch && <MobilSearch setMobilSearch={setMobilSearch} />}
      <AppRouter user={user} />

      <Footer />
    </BrowserRouter >
  );
});

export default App;
