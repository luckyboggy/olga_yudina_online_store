import React, { useContext } from "react";
import { Context } from "index.js";
import { CustomInput } from "shared/ui/input/CustomInput";
import cls from "./UserData.module.scss";

const UserData = ({ personalData, setPersonalData }) => {
  const { user } = useContext(Context);

  return (
    <div className={cls.userData}>
      <CustomInput
        type="email"
        size={"m"}
        value={user.user.email}
        margin="mb1"
        readonly
      />
      <CustomInput
        type="text"
        placeholder="Имя"
        size={"m"}
        margin="mb1"
        value={personalData.name}
        onChange={(event) =>
          setPersonalData({ ...personalData, name: event.target.value })
        }
      />
      <CustomInput
        type="text"
        placeholder="Фамилия"
        size={"m"}
        margin="mb1"
        value={personalData.surename}
        onChange={(event) =>
          setPersonalData({ ...personalData, surename: event.target.value })
        }
      />
      <CustomInput
        type="date"
        placeholder="Дата рождения"
        size={"m"}
        margin="mb1"
        //value={}
      />
    </div>
  );
};

export { UserData };
