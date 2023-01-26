import React from "react";
import cl from "./CustomInput.module.scss";

const CustomInput = (props) => {
  return <input {...props} className={cl.customInput} />;
};

export { CustomInput };
