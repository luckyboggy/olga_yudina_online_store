import React, { useContext } from "react";
import { Context } from "../../../index.js";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "shared/assets/img/svg/arrow.svg";
import { CustomButton } from "shared/ui/button/CustomButton.jsx";

const Favorites = () => {
  const { user } = useContext(Context);
  return (
    <div className="favorites">
      {user.isAuth ? (
        <div className="authorized">a</div>
      ) : (
        <div className="unauthorized">
          <div className="toAuth">
            <div className="text fs22">Избранное</div>
            <div className="text fs20">
              Войдите в аккаунт, чтобы смотреть избранное на любом устройстве
            </div>

            <Link to="../login">
              <CustomButton>Войти</CustomButton>
            </Link>
          </div>
          <div>
            <div className="emptySpace">
              <div className="toShop">
                <Link className="toShop__link" to="../shop">
                  <div>В магазин</div>
                  <Arrow className="linkArrow" />
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
