import React, { useContext, useEffect } from "react";
import { Context } from "index.js";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "shared/assets/img/svg/arrow.svg";
import { ToLogin } from "widgets/ToLogin/ui/ToLogin";
import { observer } from "mobx-react-lite";
import cls from "./Favorites.module.scss";
import { FavoritesList } from "widgets/FavoritesList/ui/FavoritesList/ui/FavoritesList";

const Favorites = observer(() => {
  const { user } = useContext(Context);

  useEffect(() => {}, [user.localFavorites, user.favoritesItems]);

  return (
    <div className={cls.favorites}>
      {!user.isAuth && (
        <div className={cls.unauthorized}>
          <ToLogin />
          {/* <div>
            <div className={cls.emptySpace}>
              <div className={cls.toShop}>
                <Link className={cls.link} to="../shop">
                  <div>В магазин</div>
                  <Arrow className={cls.linkArrow} />
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      )}
      <FavoritesList />

      {/* <div className={cls.favoritesList}>
        <div className={cls.title}>Вам понравилось</div>
        <FavoritesList />
      </div> */}
    </div>
  );
});

export { Favorites };
