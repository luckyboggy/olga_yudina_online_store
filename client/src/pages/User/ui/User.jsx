import React, { useState } from "react";
import { CustomSelect } from "shared/ui/select/CustomSelect.jsx";
import { IsMobil } from "shared/lib/hooks/IsMobil.js";
import { UserPersonal } from "entities/userManagement/UserPersonal.jsx";
import { observer } from "mobx-react-lite";
import cls from "./User.module.scss";

const User = observer(() => {
  const isMobile = IsMobil();

  const management = [
    { value: "personal", name: "Личные данные" },
    { value: "orders", name: "Заказы" },
    { value: "favorites", name: "Избранное" },
  ];
  const [currentManagement, setCurrentManagement] = useState("personal");

  return (
    <div className={cls.user}>
      <div className={cls.menu}>
        {isMobile && (
          <CustomSelect options={management} onChange={setCurrentManagement} />
        )}
      </div>
      {currentManagement === "personal" && <UserPersonal />}
    </div>
  );
});

export { User };
