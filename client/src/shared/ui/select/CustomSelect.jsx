import React from "react";
import cls from "./CustomSelect.module.scss";

const CustomSelect = ({ defValue, options, onChange, size }) => {
  return (
    <select
      className={`${cls.cSelect} ${cls[size]}`}
      onChange={(event) => onChange(event.target.value)}
    >
      {defValue && <option>{defValue}</option>}

      {options.map((option) => (
        <option className={cls.cSelect} key={option.name} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export { CustomSelect };
