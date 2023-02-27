import React from "react";
import classes from "./CustomSelect.module.scss";

const CustomSelect = ({ options, onChange }) => {
  return (
    <select className={classes.cSelect}
    onChange={(event) => onChange(event.target.value)}>
      {options.map((option) => 
        <option
          className={classes.cSelect}
          key={option.name}
          value={option.value}
        >
          {option.name}
        </option>
      )}
    </select>
  );
};

export default CustomSelect;
