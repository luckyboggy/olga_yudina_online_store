import React, { useState } from "react";
import CustomSelect from "../components/UI/select/CustomSelect";
import { IsMobil } from "../hooks/IsMobil";
import { ProductManagement } from "../components/adminManagements/ProductManagement.jsx";
import { CategoryManagement } from "../components/adminManagements/CategoryManagement.jsx";
import { UserManagement } from "../components/adminManagements/UserManagement.jsx";
import { OrderManagement } from "../components/adminManagements/OrderManagement.jsx";

const Admin = () => {
  const isMobile = IsMobil();

  const management = [
    { value: "products", name: "Товары" },
    { value: "types", name: "Категории" },
    { value: "users", name: "Пользователи" },
    { value: "orders", name: "Заказы" },
  ];

  const [currentManagement, setCurrentManagement] = useState("products");

  return (
    <div className="admin">
      <div className="admin__menu">
        {isMobile && (
          <CustomSelect options={management} onChange={setCurrentManagement} />
        )}
      </div>
      <div className="admin__content">
        {currentManagement === "products" && <ProductManagement />}
        {currentManagement === "types" && <CategoryManagement />}
        {currentManagement === "users" && <UserManagement />}
        {currentManagement === "orders" && <OrderManagement />}
      </div>
    </div>
  );
};

export { Admin };
