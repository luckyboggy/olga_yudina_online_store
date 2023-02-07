import React from "react";
import { CustomInput } from "./UI/input/CustomInput";
import { CustomButton } from "./UI/button/CustomButton";

const SignUpForm = () => {
  return (
    <form>
      <CustomInput type="text" placeholder="логин" />
      <CustomInput type="email" placeholder="email" />
      <CustomInput type="password" placeholder="пароль" />
      <CustomInput type="password" placeholder="поддвердите пароль" />
      <CustomButton>Зарегестрироваться</CustomButton>
    </form>
  );
};

export { SignUpForm };
