import React from "react";
import cls from "./Text.module.scss";

const Text = ({ children, size, position, padding }) => {
  return (
    <div
      className={`${cls.text} ${cls[size]} ${cls[position]} ${cls[padding]}`}
    >
      {children}
    </div>
  );
};

export { Text };
