import React from "react";
import classes from "./CustomTextArea.module.scss";

const CustomTextArea = (props) => {
  return <textarea {...props} className={classes.cTextAria} />;
};

export { CustomTextArea };
