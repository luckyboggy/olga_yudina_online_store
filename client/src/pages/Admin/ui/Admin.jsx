import React, { useState } from "react";
import { CustomSelect } from "shared/ui/select/CustomSelect";
import { IsMobil } from "shared/lib/hooks/IsMobil.js";
import { CategoryManagement } from "entities/adminManagements/CategoryManagement";
import { CollectionManagement } from "entities/adminManagements/CollectionsManagement";
import { UserManagement } from "entities/adminManagements/UserManagement/";
import { OrderManagement } from "entities/adminManagements/OrderManagement";
import { PersonalManagement } from "entities/adminManagements/PersonalManagement";
import { ProductManagement } from "entities/adminManagements/ProductManagement";
import { observer } from "mobx-react-lite";
import cls from "./Admin.module.scss";

const Admin = observer(() => {
  const isMobile = IsMobil();

  const management = [
    { value: "products", name: "Товары" },
    { value: "types", name: "Категории" },
    { value: "collections", name: "Коллекции" },
    { value: "users", name: "Пользователи" },
    { value: "orders", name: "Заказы" },
    { value: "personal", name: "Личные данные" },
  ];

  const [currentManagement, setCurrentManagement] = useState("products");

  return (
    <div className={cls.admin}>
      <div className={cls.menu}>
        {isMobile && (
          <CustomSelect
            margins={"mv1"}
            options={management}
            onChange={setCurrentManagement}
          />
        )}
      </div>
      <div className={cls.content}>
        {currentManagement === "products" && <ProductManagement />}
        {currentManagement === "types" && <CategoryManagement />}
        {currentManagement === "collections" && <CollectionManagement />}
        {currentManagement === "users" && <UserManagement />}
        {currentManagement === "orders" && <OrderManagement />}
        {currentManagement === "personal" && <PersonalManagement />}
      </div>
    </div>
  );
});

export { Admin };
