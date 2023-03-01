import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SignInForm } from "../components/SignInForm";
import { SignUpForm } from "../components/SignUpForm";
import {
  LOGIN_ROUTE,
  MAINPAGE_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";
import { login, registration } from "../http/userAPI.js";
import { useContext } from "react";
import { Context } from "../index.js";
import { observer } from "mobx-react-lite";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname.substring(1) === "login";
  const navigate = useNavigate();

  const [authUser, setAuthUser] = useState({
    email: "",
    password: "",
  });

  const signClick = async (email, password) => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
        console.log(data);
      } else {
        data = await registration(email, password);
        console.log(data);
      }
      user.setUser(data);
      user.setIsAuth(true);
      setAuthUser({
        email: "",
        password: "",
      });
      navigate("../" + MAINPAGE_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

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
          <SignInForm
            authUser={authUser}
            setAuthUser={setAuthUser}
            signClick={signClick}
          />
        ) : (
          <SignUpForm
            authUser={authUser}
            setAuthUser={setAuthUser}
            signClick={signClick}
          />
        )}
      </div>
    </div>
  );
});

export { Auth };
