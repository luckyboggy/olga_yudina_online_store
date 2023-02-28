import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SignInForm } from "../components/SignInForm";
import { SignUpForm } from "../components/SignUpForm";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname.substring(1) === "login";

  return (
    <div className="auth">
      <div className="auth_choose">
        <Link
          className={
            isLogin
              ? "auth_choose_btn auth_choose_btn_active"
              : "auth_choose_btn"
          }
          to={"../" + LOGIN_ROUTE}
        >
          вход
        </Link>
        <Link
          className={
            isLogin
              ? "auth_choose_btn"
              : "auth_choose_btn auth_choose_btn_active"
          }
          to={"../" + REGISTRATION_ROUTE}
        >
          регистрация
        </Link>
      </div>
      <div className="authForm">
        {isLogin ? (
          <SignInForm isLogin={isLogin} />
        ) : (
          <SignUpForm isLogin={isLogin} />
        )}
      </div>
    </div>
  );
};

export { Auth };
