import React from "react";
import cl from "./CustomButton.module.scss";

const CustomButton = ({ props, children }) => {
  return (
    <button {...props} className={cl.customButton}>
      {children}
    </button>
  );
};

export { CustomButton };
