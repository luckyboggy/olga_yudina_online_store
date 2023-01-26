import React, { useState } from "react";
import { SignInForm } from "../components/SignInForm";
import { SignUpForm } from "../components/SignUpForm";

const Auth = () => {
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="auth">
      <div className="auth_choose">
        <button
          className={
            signUp
              ? "auth_choose_btn auth_choose_btn_active"
              : "auth_choose_btn"
          }
          onClick={() => setSignUp(true)}
        >
          регистрация
        </button>
        <button
          className={
            signUp
              ? "auth_choose_btn"
              : "auth_choose_btn auth_choose_btn_active"
          }
          onClick={() => setSignUp(false)}
        >
          вход
        </button>
      </div>
      <div className="authForm">{signUp ? <SignUpForm /> : <SignInForm />}</div>
    </div>
  );
};

export { Auth };
