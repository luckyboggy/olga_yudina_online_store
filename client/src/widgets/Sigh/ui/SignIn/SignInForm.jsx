import React from "react";
import { CustomInput } from "shared/ui/input/CustomInput";
import { CustomButton } from "shared/ui/button/CustomButton";

const SignInForm = ({ authUser, setAuthUser, signClick }) => {
  return (
    <form>
      <CustomInput
        type="email"
        placeholder="email"
        size={"m"}
        value={authUser.email}
        onChange={(event) =>
          setAuthUser({ ...authUser, email: event.target.value })
        }
      />
      <CustomInput
        type="password"
        placeholder="пароль"
        size={"m"}
        value={authUser.password}
        onChange={(event) =>
          setAuthUser({ ...authUser, password: event.target.value })
        }
      />
      <CustomButton
        type="submit"
        fontSize={"m"}
        onClick={(event) => {
          event.preventDefault();
          signClick(authUser.email, authUser.password);
        }}
      >
        Войти
      </CustomButton>
      <a href="/#">Восстановить пароль</a>
    </form>
  );
};

export { SignInForm };
