import React, { useContext } from "react";
import { Context } from "index.js";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "shared/assets/img/svg/arrow.svg";
import { CustomButton } from "shared/ui/button/CustomButton.jsx";
import { Text } from "shared/ui/text/Text";
import cls from "./Favorites.module.scss";

const Favorites = () => {
  const { user } = useContext(Context);
  return (
    <div className={cls.favorites}>
      {user.isAuth ? (
        <div className={cls.authorized}>a</div>
      ) : (
        <div className={cls.unauthorized}>
          <div className={cls.toAuth}>
            <Text size={"m"} position={"left"} padding={"pv1"}>
              Избранное
            </Text>
            <Text size={"s"} position={"left"} padding={"pv1"}>
              Войдите в аккаунт, чтобы смотреть избранное на любом устройстве
            </Text>

            <Link to="../login">
              <CustomButton>Войти</CustomButton>
            </Link>
          </div>
          <div>
            <div className={cls.emptySpace}>
              <div className={cls.toShop}>
                <Link className={cls.link} to="../shop">
                  <div>В магазин</div>
                  <Arrow className={cls.linkArrow} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Favorites };
