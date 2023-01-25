import React from "react";

const SignUpForm = () => {
  return (
    <form action="#" className="form form_singup">
      <input type="text" className="form__input" placeholder="Логин" />
      <input type="email" className="form__input" placeholder="Email" />
      <input type="password" className="form__input" placeholder="Пароль" />
      <input
        type="password"
        className="form__input"
        placeholder="Поддвердите пароль"
      />
      <button class="form__btn form__btn_signup">Зарегестрироваться</button>
    </form>
  );
};

export { SignUpForm };
