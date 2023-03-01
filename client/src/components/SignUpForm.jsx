import React from "react";
import { CustomInput } from "./UI/input/CustomInput";
import { CustomButton } from "./UI/button/CustomButton";

const SignUpForm = ({ authUser, setAuthUser, signClick }) => {
  return (
    <form>
      <CustomInput type="text" placeholder="логин" />
      <CustomInput
        type="email"
        placeholder="email"
        value={authUser.email}
        onChange={(event) =>
          setAuthUser({ ...authUser, email: event.target.value })
        }
      />
      <CustomInput
        type="password"
        placeholder="пароль"
        value={authUser.password}
        onChange={(event) =>
          setAuthUser({ ...authUser, password: event.target.value })
        }
      />
      <CustomInput type="password" placeholder="поддвердите пароль" />

      <CustomButton
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          signClick(authUser.email, authUser.password);
        }}
      >
        Зарегестрироваться
      </CustomButton>
    </form>
  );
};

export { SignUpForm };
