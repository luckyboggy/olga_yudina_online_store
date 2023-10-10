import React, { useContext } from "react";
import { Context } from "index.js";
import { CustomInput } from "shared/ui/input/CustomInput";
import cls from "./UserData.module.scss";

const UserData = ({ personalData, setPersonalData }) => {
  const { user } = useContext(Context);

  return (
    <div className={cls.userData}>
      <CustomInput type="email" size={"m"} value={user.user.email} readonly />
      <CustomInput
        type="text"
        placeholder="Имя"
        size={"m"}
        value={personalData.name}
        onChange={(event) =>
          setPersonalData({ ...personalData, name: event.target.value })
        }
      />
      <CustomInput
        type="text"
        placeholder="Фамилия"
        size={"m"}
        value={personalData.surename}
        onChange={(event) =>
          setPersonalData({ ...personalData, surename: event.target.value })
        }
      />
      <CustomInput
        type="date"
        placeholder="Дата рождения"
        size={"m"}
        //value={}
      />
    </div>
  );
};

export { UserData };
