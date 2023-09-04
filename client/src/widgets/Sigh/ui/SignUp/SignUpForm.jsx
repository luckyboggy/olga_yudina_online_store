import React from "react";
import { CustomInput } from "shared/ui/input/CustomInput";
import { CustomButton } from "shared/ui/button/CustomButton";

const SignUpForm = ({ authUser, setAuthUser, signClick }) => {
  return (
    <form>
      <CustomInput type="text" placeholder="логин" size={"m"} />
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
      <CustomInput
        type="password"
        placeholder="поддвердите пароль"
        size={"m"}
      />

      <CustomButton
        type="submit"
        fontSize={"m"}
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
