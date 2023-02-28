import React, { useState } from "react";
import { CustomInput } from "./UI/input/CustomInput";
import { CustomButton } from "./UI/button/CustomButton";
import { registration, login } from "../http/useAPI.js";

const SignUpForm = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signClick = async (email, password) => {
    if (isLogin) {
      const response = await login();
    } else {
      const response = await registration(email, password);
      console.log(response);
    }
  };

  return (
    <form>
      <CustomInput type="text" placeholder="логин" />
      <CustomInput
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <CustomInput
        type="password"
        placeholder="пароль"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <CustomInput type="password" placeholder="поддвердите пароль" />

      <CustomButton
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          signClick(email, password);
        }}
      >
        Зарегестрироваться
      </CustomButton>
    </form>
  );
};

export { SignUpForm };
