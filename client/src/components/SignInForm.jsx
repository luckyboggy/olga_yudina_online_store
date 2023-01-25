import React from "react";

const SignInForm = () => {
  return (
    <form action="#" class="form form_signin">
      <input type="text" class="form__input" placeholder="Логин" />
      <input type="password" class="form__input" placeholder="Пароль" />
      <button class="form__btn">Войти</button>
      <a href="/#" class="form__forgot">
        Восстановить пароль
      </a>
    </form>
  )
};

export { SignInForm };
