import React, { useContext, useState, useEffect } from "react";
import { Context } from "index.js";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "app/utils/consts";
import { change, changeAddress, fetchUserAddres } from "http/userAPI";
import { CustomButton } from "shared/ui/button/CustomButton";
import { UserAddress } from "widgets/UserAddress";
import { UserData } from "widgets/UserData";
import { Text } from "shared/ui/text/Text";
import { observer } from "mobx-react-lite";
import cls from "./UserPersonal.module.scss";

const UserPersonal = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [newPersonal, setNewPersonal] = useState({
    name: user.user.name,
    surename: user.user.surename,
    phone: user.user.phone,
  });

  const [newAddres, setNewAddres] = useState({
    region: user.address.region,
    city: user.address.city,
    street: user.address.street,
    house: user.address.house,
    flat: user.address.flat,
    zipCode: user.address.zipCode,
  });

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
    change(
      user.user.email,
      newPersonal.name,
      newPersonal.surename,
      newPersonal.phone
    ).then((data) => {
      user.setUser(data);
    });
  };
  const changeAddres = () => {
    console.log(newAddres);
    changeAddress(
      user.user.id,
      newAddres.region,
      newAddres.city,
      newAddres.street,
      newAddres.house,
      newAddres.flat,
      newAddres.zipCode
    );
  };

  useEffect(() => {
    fetchUserAddres(user.user.id).then((data) => {
      user.setAddress(data);
      setNewAddres({ ...data });
    });
  }, []);

  return (
    <div className={cls.personal}>
      <UserData personalData={newPersonal} setPersonalData={setNewPersonal} />
      <div className={cls.address}>
        <Text size="m" padding="pv1">
          Адрес доставки
        </Text>
        <UserAddress address={newAddres} setAddress={setNewAddres} />
      </div>

      <div className={cls.btns}>
        <CustomButton
          fontSize={"s"}
          onClick={() => {
            changePersonal();
            changeAddres();
          }}
        >
          Сохранить
        </CustomButton>
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
});

export { UserPersonal };
