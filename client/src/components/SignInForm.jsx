import React from "react";
import { CustomInput } from "./UI/input/CustomInput";
import { CustomButton } from "./UI/button/CustomButton";

const SignInForm = () => {
  return (
    <form>
      <CustomInput type="text" placeholder="логин" />
      <CustomInput type="password" placeholder="пароль" />
      <CustomButton>Войти</CustomButton>
      <a href="/#">Восстановить пароль</a>
    </form>
  );
};

export { SignInForm };
