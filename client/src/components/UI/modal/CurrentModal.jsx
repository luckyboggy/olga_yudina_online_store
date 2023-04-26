import React from "react";
import cl from "./CurrentModal.module.scss";

const CurrentModal = ({ close, children }) => {
  const handleClose = (event) => {
    if (event.target.className === cl.currentModal) {
      close(false);
    }
  };

  return (
    <div className={cl.currentModal} onClick={(event) => handleClose(event)}>
      <div className={cl.modal__content}>{children}</div>
    </div>
  );
};

export default CurrentModal;
