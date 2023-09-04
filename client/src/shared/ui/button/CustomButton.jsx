import React from "react";
import cl from "./CustomButton.module.scss";

const CustomButton = ({ children, fontSize, ...props }) => {
  return (
    <button {...props} className={`${cl.customButton} ${cl[fontSize]}`}>
      {children}
    </button>
  );
};

export { CustomButton };
