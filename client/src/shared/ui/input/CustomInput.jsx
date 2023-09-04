import React from "react";
import cl from "./CustomInput.module.scss";

const CustomInput = ({ size, margin, ...props }) => {
  return (
    <input
      {...props}
      className={`${cl.customInput} ${cl[size]} ${cl[margin]}`}
    />
  );
};

export { CustomInput };
