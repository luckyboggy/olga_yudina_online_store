import React from "react";
import { CustomInput } from "shared/ui/input/CustomInput";
import { CustomButton } from "shared/ui/button/CustomButton";
import cls from "./SignUpForm.module.scss";

const SignUpForm = ({ authUser, setAuthUser, signClick }) => {
  return (
    <form className={cls.signUnForm}>
      <div>
        <CustomInput type="text" placeholder="логин" size={"m"} margin="mv1" />
        <CustomInput
          type="email"
          placeholder="email"
          size={"m"}
          margin="mv1"
          value={authUser.email}
          onChange={(event) =>
            setAuthUser({ ...authUser, email: event.target.value })
          }
        />
        <CustomInput
          type="password"
          placeholder="пароль"
          size={"m"}
          margin="mv1"
          value={authUser.password}
          onChange={(event) =>
            setAuthUser({ ...authUser, password: event.target.value })
          }
        />
        <CustomInput
          type="password"
          placeholder="подтвердите пароль"
          size={"m"}
          margin="mv1"
        />
      </div>
      <div className={cls.btns}>
        <CustomButton
          type="submit"
          fontSize={"s"}
          onClick={(event) => {
            event.preventDefault();
            signClick(authUser.email, authUser.password);
          }}
        >
          Зарегистрироваться
        </CustomButton>
      </div>
    </form>
  );
};

export { SignUpForm };
