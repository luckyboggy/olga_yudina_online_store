import React, { useContext } from "react";
import { Context } from "../../index.js";


const UserPersonal = () => {
  const { user } = useContext(Context);
  console.log(user)
  return <div>
    <div>{user.user.email}</div>
  </div>;
};

export { UserPersonal };
