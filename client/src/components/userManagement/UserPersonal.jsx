import React, { useContext } from "react";
import { Context } from "../../index.js";


const UserPersonal = () => {
  const { user } = useContext(Context);
  
  return <div>
    <div>{user.user.email}</div>
  </div>;
};

export { UserPersonal };
