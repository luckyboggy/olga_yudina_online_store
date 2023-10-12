import React from "react";
import { CustomInput } from "shared/ui/input/CustomInput";
import cls from "./UserAddress.module.scss";

const UserAddress = ({ address, setAddress }) => {
  return (
    <div className={cls.userAddres}>
      {/* выбор города */}
      <CustomInput
        type="text"
        placeholder={"Город"}
        size={"m"}
        margin="mb1"
        value={address.city}
        onChange={(event) =>
          setAddress({ ...address, city: event.target.value })
        }
      />

      {/* выбор улицы */}
      <CustomInput
        type="text"
        placeholder={"Улица"}
        size={"m"}
        margin="mb1"
        value={address.street}
        onChange={(event) =>
          setAddress({ ...address, street: event.target.value })
        }
      />
      <div className={cls.houseFlat}>
        <CustomInput
          type="text"
          placeholder={"Дом"}
          size={"m"}
          margin="mb1"
          value={address.house}
          onChange={(event) =>
            setAddress({ ...address, house: event.target.value })
          }
        />
        <CustomInput
          type="text"
          placeholder={"Картира"}
          size={"m"}
          margin="mb1"
          value={address.flat}
          onChange={(event) =>
            setAddress({ ...address, flat: event.target.value })
          }
        />
      </div>
    </div>
  );
};

export { UserAddress };
