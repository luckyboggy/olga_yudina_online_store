import React from "react";
import { CustomInput } from "./UI/input/CustomInput";
import { CustomButton } from "./UI/button/CustomButton";

const SignUpForm = () => {
  return (
    <form>
      <CustomInput type="text" placeholder="Логин" />
      <CustomInput type="email" placeholder="Email" />
      <CustomInput type="password" placeholder="Пароль" />
      <CustomInput type="password" placeholder="Поддвердите пароль" />
      <CustomButton>Зарегестрироваться</CustomButton>
    </form>
  );
};

export { SignUpForm };
