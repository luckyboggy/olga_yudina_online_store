import React, { useContext } from "react";
import { CustomButton } from "shared/ui/button/CustomButton";
import { Context } from "../../index.js";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../app/utils/consts";

const PersonalManagement = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const exit = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate("../" + LOGIN_ROUTE);
  };

  return (
    <div className="admin__personal">
      <div>{user.user.email}</div>
      <CustomButton onClick={() => exit()}>Выход</CustomButton>
    </div>
  );
};

export { PersonalManagement };
