import React, { useState, useEffect } from "react";
import { ReactComponent as Close } from "shared/assets/img/svg/close.svg";
import cl from "./Modal.module.scss";

const Modal = ({ children, type, title = "", close }) => {
  const [show, setShow] = useState("");

  const handleClose = (event) => {
    setShow("");
    setTimeout(() => {
      if (event.target.className === `${cl.Modal} ${cl[type]}`) {
        close(false);
      }
    }, 200);
  };

  useEffect(() => {
    setShow("show");
  }, []);

  return (
    <div
      className={`${cl.Modal} ${cl[type]}`}
      onClick={(event) => handleClose(event)}
    >
      <div className={`${cl[type]} ${cl[show]}`}>
        {title && (
          <div className={cl.modalHeader}>
            <div className={cl.title}>{title}</div>
            <Close
              className={cl.close}
              onClick={() => {
                setShow("");
                setTimeout(() => {
                  close(false);
                }, 200);
              }}
            />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export  {Modal};
