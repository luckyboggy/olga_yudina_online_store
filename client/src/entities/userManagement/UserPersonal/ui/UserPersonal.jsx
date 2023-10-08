import React, { useContext } from "react";
import { Context } from "index.js";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "app/utils/consts";
import { CustomButton } from "shared/ui/button/CustomButton";
import cls from "./UserPersonal.module.scss";
import { CustomInput } from "shared/ui/input/CustomInput";

const UserPersonal = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const exit = () => {
    user.setUser({});
    user.setIsAuth(false);
    window.localStorage.removeItem("jsonWebToken");
    window.localStorage.removeItem("alreadyliked");
    window.localStorage.removeItem("localFavorites");
    window.localStorage.removeItem("localBasket");
    navigate("../" + LOGIN_ROUTE);
  };

  const changePersonal = () => {

  }

  return (
    <div className={cls.personal}>
      <CustomInput type="email" size={"m"} value={user.user.email} readonly />
      <CustomInput
        type="text"
        placeholder="Имя"
        size={"m"}
        value={user.user.name}
      />
      <CustomInput
        type="text"
        placeholder="Фамилия"
        size={"m"}
        value={user.user.surename}
      />
      <CustomInput
        type="date"
        placeholder="Дата рождения"
        size={"m"}
        //value={}
      />

      <div className={cls.btns}>
        <CustomButton fontSize={"s"}>Сохранить</CustomButton>
        <CustomButton
          onClick={() => exit()}
          fontSize={"s"}
          theme={"inverted"}
          margins={"mt1"}
        >
          Выход
        </CustomButton>
      </div>
    </div>
  );
};

export { UserPersonal };
