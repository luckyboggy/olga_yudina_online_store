import React, { useContext } from "react";
import { Context } from "../index.js";
import { CustomButton } from "../components/UI/button/CustomButton.jsx";

const Favorites = () => {
  const { user } = useContext(Context);
  return (
    <div className="favorites">
      {user.isAuth ? (
        <div>a</div>
      ) : (
        <div>
          <div>Избранное</div>
          <div>
            Войдите в аккаунт, чтобы смотреть избранное на любом устройстве
          </div>
          <CustomButton>Войти</CustomButton>
          <div>В магазин</div>
        </div>
      )}
    </div>
  );
};

export { Favorites };
