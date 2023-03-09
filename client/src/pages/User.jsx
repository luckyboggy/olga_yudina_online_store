import React, { useState } from "react";
import CustomSelect from "../components/UI/select/CustomSelect.jsx";
import { IsMobil } from "../hooks/IsMobil.js";
import { UserPersonal } from "../components/userManagement/UserPersonal.jsx";
import { observer } from "mobx-react-lite";

const User = observer(() => {
  const isMobile = IsMobil();

  const management = [
    { value: "personal", name: "Личные данные" },
    { value: "orders", name: "Заказы" },
    { value: "favorites", name: "Избранное" },
  ];
  const [currentManagement, setCurrentManagement] = useState("personal");

  return (
    <div className="user">
      <div className="user__menu">
        {isMobile && (
          <CustomSelect options={management} onChange={setCurrentManagement} />
        )}
      </div>
      {currentManagement === "personal" && <UserPersonal/>}
    </div>
  );
});

export { User };
