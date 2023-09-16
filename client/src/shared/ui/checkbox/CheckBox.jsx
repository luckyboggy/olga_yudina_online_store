import React from "react";
import cls from "./CheckBox.module.scss";

const CheckBox = ({ children, checked, onChange, type, ...props }) => {
  return (
    <div className={cls.checkBox}>
      <input
        type={type}
        id="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor="checkbox">{children}</label>
    </div>
  );
};

export { CheckBox };
