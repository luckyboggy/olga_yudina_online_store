import React from "react";
import { CustomInput } from "./UI/input/CustomInput";

const MobilSearch = ({ setMobilSearch }) => {
  const handleClose = (event) => {
    if (event.target.className === "mobilSearch") {
      setMobilSearch(false);
    }
  };

  return (
    <div className="mobilSearch" onClick={(event) => handleClose(event)}>
      <div className="searchWrapper">
        <CustomInput />
      </div>
    </div>
  );
};

export { MobilSearch };
